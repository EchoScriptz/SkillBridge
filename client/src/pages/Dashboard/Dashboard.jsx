import { useState } from 'react';
import StatCard from '../../components/features/StatCard';
import ChartWrapper from '../../components/features/ChartWrapper';
import DataTable from '../../components/features/DataTable';
import SearchBar from '../../components/features/SearchBar';
import Badge from '../../components/ui/Badge';
import { Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';
import './Dashboard.css';

// Dummy data — replace with real API on hackathon day
const stats = [
  { title: 'Total Users', value: '2,847', trend: '+12.5%', trendDir: 'up', icon: Users, color: '#6366f1' },
  { title: 'Orders', value: '1,234', trend: '+8.2%', trendDir: 'up', icon: ShoppingBag, color: '#8b5cf6' },
  { title: 'Revenue', value: '$45,231', trend: '+23.1%', trendDir: 'up', icon: DollarSign, color: '#10b981' },
  { title: 'Growth', value: '18.2%', trend: '-2.4%', trendDir: 'down', icon: TrendingUp, color: '#f59e0b' },
];

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 750 },
];

const pieData = [
  { name: 'Active', value: 540 },
  { name: 'Inactive', value: 210 },
  { name: 'Pending', value: 130 },
];

const tableColumns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  {
    key: 'status', label: 'Status', sortable: true,
    render: (val) => (
      <Badge variant={val === 'Active' ? 'success' : val === 'Pending' ? 'warning' : 'danger'} dot>
        {val}
      </Badge>
    ),
  },
  { key: 'date', label: 'Joined', sortable: true },
];

const tableData = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', date: '2024-01-15' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active', date: '2024-02-20' },
  { id: 3, name: 'Carol Williams', email: 'carol@example.com', role: 'Editor', status: 'Pending', date: '2024-03-10' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Inactive', date: '2024-03-22' },
  { id: 5, name: 'Eva Davis', email: 'eva@example.com', role: 'Admin', status: 'Active', date: '2024-04-05' },
  { id: 6, name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'Active', date: '2024-04-12' },
  { id: 7, name: 'Grace Wilson', email: 'grace@example.com', role: 'Editor', status: 'Pending', date: '2024-05-01' },
  { id: 8, name: 'Henry Taylor', email: 'henry@example.com', role: 'User', status: 'Inactive', date: '2024-05-18' },
];

export default function Dashboard() {
  const [filteredData, setFilteredData] = useState(tableData);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredData(tableData);
      return;
    }
    const q = query.toLowerCase();
    setFilteredData(
      tableData.filter(row =>
        row.name.toLowerCase().includes(q) ||
        row.email.toLowerCase().includes(q) ||
        row.role.toLowerCase().includes(q)
      )
    );
  };

  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Overview of your key metrics and data</p>
      </div>

      <div className="grid-4 stat-grid">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>

      <div className="grid-2 chart-grid">
        <ChartWrapper
          type="bar"
          title="Monthly Revenue"
          subtitle="Last 7 months"
          data={chartData}
          dataKey="value"
          xKey="name"
        />
        <ChartWrapper
          type="pie"
          title="User Status"
          subtitle="Distribution"
          data={pieData}
          dataKey="value"
          xKey="name"
          height={250}
        />
      </div>

      <div className="table-section">
        <div className="table-header">
          <h2>Recent Users</h2>
          <SearchBar onSearch={handleSearch} placeholder="Search users..." />
        </div>
        <DataTable columns={tableColumns} data={filteredData} />
      </div>
    </div>
  );
}
