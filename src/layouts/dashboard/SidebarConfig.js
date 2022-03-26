// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill')
  },
  {
    title: 'Files',
    path: '/dashboard/files',
    icon: getIcon('eva:folder-fill')
  },
  {
    title: 'Assignments',
    path: '/dashboard/assignment',
    icon: getIcon('eva:file-text-fill')
  },
  {
    title: 'Test',
    path: '/dashboard/test',
    icon: getIcon('eva:clipboard-fill')
  },
  {
    title: 'Chat',
    path: '/dashboard/chat',
    icon: getIcon('eva:message-circle-fill')
  },
  {
    title: 'Announcement',
    path: '/dashboard/announcement',
    icon: getIcon('eva:volume-down-fill')
  },

  {
    title: 'Grades',
    path: '/dashboard/grades',
    icon: getIcon('eva:percent-outline')
  },
  {
    title: 'Video',
    path: '/dashboard/video',
    icon: getIcon('eva:film-fill')
  },
  {
    title: 'Users',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill')
  },
];

export default sidebarConfig;
