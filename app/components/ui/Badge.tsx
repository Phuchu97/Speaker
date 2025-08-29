import {motion, type HTMLMotionProps} from 'framer-motion';
import {cn} from '~/lib/design-system';

export interface BadgeProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const badgeVariants = {
  primary: 'bg-primary-100 text-primary-800 border-primary-200',
  secondary: 'bg-secondary-100 text-secondary-800 border-secondary-200',
  success: 'bg-success-100 text-success-800 border-success-200',
  warning: 'bg-warning-100 text-warning-800 border-warning-200',
  error: 'bg-error-100 text-error-800 border-error-200',
  outline: 'bg-white text-secondary-700 border-secondary-300',
};

const badgeSizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-2 text-base',
};

export function Badge({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  const baseClasses = cn(
    'inline-flex items-center gap-1.5 font-medium rounded-full border',
    badgeVariants[variant],
    badgeSizes[size],
    className
  );

  return (
    <motion.div
      className={baseClasses}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.div>
  );
}
