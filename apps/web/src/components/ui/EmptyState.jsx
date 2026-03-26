import { Inbox } from 'lucide-react';
import './EmptyState.css';

/**
 * Empty state placeholder
 */
export default function EmptyState({
  icon: Icon = Inbox,
  title = 'No data found',
  description = 'There are no items to display right now.',
  action,
}) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <Icon size={48} />
      </div>
      <h3 className="empty-title">{title}</h3>
      <p className="empty-desc">{description}</p>
      {action && <div className="empty-action">{action}</div>}
    </div>
  );
}
