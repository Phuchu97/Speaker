import {useState} from 'react';
import {motion} from 'framer-motion';
import {
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  CogIcon,
  TruckIcon,
  CreditCardIcon,
  GiftIcon,
  StarIcon,
  ChartBarIcon,
  CalendarIcon,
  BellIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import {Link} from 'react-router';
import {Button} from './ui/Button';
import {Badge} from './ui/Badge';
import {Card} from './ui/Card';
import {cn, staggerContainer, staggerItem, fadeIn} from '~/lib/design-system';

interface AccountDashboardProps {
  customer: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    defaultAddress?: any;
    orders: {
      totalCount: number;
      edges: any[];
    };
  };
}

export function AccountDashboard({customer}: AccountDashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for enhanced dashboard
  const dashboardStats = [
    {
      id: 'orders',
      title: 'Total Orders',
      value: customer.orders.totalCount,
      icon: <ShoppingBagIcon className="w-6 h-6" />,
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
      change: '+12%',
      trend: 'up',
    },
    {
      id: 'spent',
      title: 'Total Spent',
      value: '$1,247.89',
      icon: <CreditCardIcon className="w-6 h-6" />,
      color: 'text-success-600',
      bgColor: 'bg-success-50',
      change: '+8%',
      trend: 'up',
    },
    {
      id: 'wishlist',
      title: 'Wishlist Items',
      value: '12',
      icon: <HeartIcon className="w-6 h-6" />,
      color: 'text-error-600',
      bgColor: 'bg-error-50',
      change: '+3',
      trend: 'up',
    },
    {
      id: 'points',
      title: 'Reward Points',
      value: '2,450',
      icon: <StarIcon className="w-6 h-6" />,
      color: 'text-warning-600',
      bgColor: 'bg-warning-50',
      change: '+150',
      trend: 'up',
    },
  ];

  const quickActions = [
    {
      id: 'new-order',
      title: 'Start Shopping',
      description: 'Browse our latest products',
      icon: <ShoppingBagIcon className="w-5 h-5" />,
      link: '/collections',
      color: 'bg-primary-600 hover:bg-primary-700',
    },
    {
      id: 'track-order',
      title: 'Track Orders',
      description: 'Check your order status',
      icon: <TruckIcon className="w-5 h-5" />,
      link: '/account/orders',
      color: 'bg-secondary-600 hover:bg-secondary-700',
    },
    {
      id: 'wishlist',
      title: 'View Wishlist',
      description: 'See your saved items',
      icon: <HeartIcon className="w-5 h-5" />,
      link: '/account/wishlist',
      color: 'bg-error-600 hover:bg-error-700',
    },
    {
      id: 'profile',
      title: 'Edit Profile',
      description: 'Update your information',
      icon: <UserIcon className="w-5 h-5" />,
      link: '/account/profile',
      color: 'bg-warning-600 hover:bg-warning-700',
    },
  ];

  const recentOrders = [
    {
      id: 'ORDER-001',
      date: '2024-01-15',
      status: 'delivered',
      total: '$89.99',
      items: 2,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
    },
    {
      id: 'ORDER-002',
      date: '2024-01-10',
      status: 'shipped',
      total: '$149.99',
      items: 1,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop',
    },
    {
      id: 'ORDER-003',
      date: '2024-01-05',
      status: 'processing',
      total: '$59.99',
      items: 3,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-success-700 bg-success-100';
      case 'shipped':
        return 'text-primary-700 bg-primary-100';
      case 'processing':
        return 'text-warning-700 bg-warning-100';
      default:
        return 'text-secondary-700 bg-secondary-100';
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {/* Welcome Header */}
      <motion.div className="mb-8" variants={staggerItem}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-secondary-900">
              Welcome back, {customer.firstName}! 👋
            </h1>
            <p className="text-secondary-600 mt-2">
              Here's what's happening with your account today.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              icon={<BellIcon className="w-4 h-4" />}
            >
              Notifications
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={<CogIcon className="w-4 h-4" />}
            >
              Settings
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={staggerContainer}
      >
        {dashboardStats.map((stat, index) => (
          <motion.div key={stat.id} variants={staggerItem} custom={index}>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-secondary-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-secondary-900">
                    {stat.value}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className={cn(
                      'text-xs font-medium',
                      stat.trend === 'up' ? 'text-success-600' : 'text-error-600'
                    )}>
                      {stat.change} this month
                    </span>
                  </div>
                </div>
                <div className={cn('p-3 rounded-full', stat.bgColor)}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions */}
          <motion.div variants={staggerItem}>
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-secondary-900 mb-6 flex items-center gap-2">
                <ChartBarIcon className="w-5 h-5 text-primary-600" />
                Quick Actions
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={action.id}
                    variants={staggerItem}
                    custom={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={action.link}
                      className={cn(
                        'block p-4 rounded-lg text-white transition-colors',
                        action.color
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {action.icon}
                        <div>
                          <div className="font-semibold">{action.title}</div>
                          <div className="text-sm opacity-90">{action.description}</div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Orders */}
          <motion.div variants={staggerItem}>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-secondary-900 flex items-center gap-2">
                  <ShoppingBagIcon className="w-5 h-5 text-primary-600" />
                  Recent Orders
                </h2>
                <Link to="/account/orders">
                  <Button variant="outline" size="sm">
                    View All Orders
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    className="flex items-center gap-4 p-4 border border-secondary-200 rounded-lg hover:border-primary-300 transition-colors"
                    variants={staggerItem}
                    custom={index}
                    whileHover={{ scale: 1.01 }}
                  >
                    <img
                      src={order.image}
                      alt="Order item"
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold text-secondary-900">
                          Order {order.id}
                        </div>
                        <Badge variant="outline" className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-secondary-600">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {order.date}
                        </span>
                        <span>{order.items} item(s)</span>
                        <span className="font-semibold text-secondary-900">
                          {order.total}
                        </span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm">
                      <Link to={`/account/orders/${order.id}`}>
                        View Details
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Profile Quick View */}
          <motion.div variants={staggerItem}>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                <UserIcon className="w-5 h-5 text-primary-600" />
                Profile
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">
                      {customer.firstName.charAt(0)}{customer.lastName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-secondary-900">
                      {customer.firstName} {customer.lastName}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {customer.email}
                    </div>
                  </div>
                </div>

                {customer.defaultAddress && (
                  <div className="flex items-start gap-2 text-sm">
                    <MapPinIcon className="w-4 h-4 text-secondary-500 mt-0.5" />
                    <div className="text-secondary-600">
                      <div>{customer.defaultAddress.address1}</div>
                      <div>
                        {customer.defaultAddress.city}, {customer.defaultAddress.province} {customer.defaultAddress.zip}
                      </div>
                    </div>
                  </div>
                )}

                <Link to="/account/profile">
                  <Button variant="outline" size="sm" fullWidth>
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>

          {/* Loyalty Program */}
          <motion.div variants={staggerItem}>
            <Card className="p-6 bg-gradient-to-br from-primary-50 to-purple-50 border-primary-200">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                <GiftIcon className="w-5 h-5 text-primary-600" />
                Loyalty Rewards
              </h3>
              
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    2,450
                  </div>
                  <div className="text-sm text-secondary-600">points available</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-600">Progress to next tier</span>
                    <span className="font-medium">550 points to go</span>
                  </div>
                  <div className="w-full bg-primary-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: '75%' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button variant="primary" size="sm" fullWidth>
                    Redeem Points
                  </Button>
                  <Button variant="outline" size="sm" fullWidth>
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div variants={staggerItem}>
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                <BellIcon className="w-5 h-5 text-primary-600" />
                Recent Activity
              </h3>
              
              <div className="space-y-3">
                {[
                  { text: 'Order #ORDER-001 was delivered', time: '2 hours ago', type: 'success' },
                  { text: 'New reward points earned', time: '1 day ago', type: 'info' },
                  { text: 'Profile updated successfully', time: '3 days ago', type: 'neutral' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={cn(
                      'w-2 h-2 rounded-full mt-2',
                      activity.type === 'success' ? 'bg-success-500' :
                      activity.type === 'info' ? 'bg-primary-500' :
                      'bg-secondary-400'
                    )} />
                    <div>
                      <div className="text-sm text-secondary-900">{activity.text}</div>
                      <div className="text-xs text-secondary-500">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
