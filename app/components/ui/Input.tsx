import {forwardRef} from 'react';
import {motion} from 'framer-motion';
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/24/outline';
import {cn} from '~/lib/design-system';
import {useState} from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helper?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: 'default' | 'filled' | 'minimal';
  inputSize?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    type,
    label,
    error,
    helper,
    leftIcon,
    rightIcon,
    variant = 'default',
    inputSize = 'md',
    fullWidth = false,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    const variants = {
      default: 'border border-secondary-300 bg-white hover:border-secondary-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200',
      filled: 'border-0 bg-secondary-100 hover:bg-secondary-200 focus:bg-white focus:ring-2 focus:ring-primary-500',
      minimal: 'border-0 border-b-2 border-secondary-300 bg-transparent rounded-none hover:border-secondary-400 focus:border-primary-500',
    };

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-4 text-base',
      lg: 'h-13 px-5 text-lg',
    };

    return (
      <motion.div
        className={cn('relative', fullWidth && 'w-full')}
        initial={false}
        animate={{
          scale: isFocused ? 1.02 : 1,
        }}
        transition={{duration: 0.2}}
      >
        {/* Label */}
        {label && (
          <motion.label
            className={cn(
              'block text-sm font-medium mb-2 transition-colors',
              error ? 'text-error-600' : 'text-secondary-700'
            )}
            animate={{
              color: isFocused ? 'rgb(var(--primary-600))' : undefined,
            }}
          >
            {label}
          </motion.label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-500 pointer-events-none">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            type={inputType}
            className={cn(
              'w-full rounded-lg transition-all duration-200 outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-secondary-400',
              variants[variant],
              sizes[inputSize],
              leftIcon ? 'pl-10' : '',
              (rightIcon || isPassword) ? 'pr-10' : '',
              error && 'border-error-500 focus:border-error-500 focus:ring-error-200',
              className
            )}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {/* Right Icon / Password Toggle */}
          {(rightIcon || isPassword) && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isPassword ? (
                <button
                  type="button"
                  className="text-secondary-500 hover:text-secondary-700 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              ) : (
                <div className="text-secondary-500 pointer-events-none">
                  {rightIcon}
                </div>
              )}
            </div>
          )}

          {/* Focus Ring Animation */}
          {variant !== 'minimal' && (
            <motion.div
              className="absolute inset-0 rounded-lg border-2 border-primary-500 pointer-events-none"
              initial={{opacity: 0, scale: 1}}
              animate={{
                opacity: isFocused ? 0.3 : 0,
                scale: isFocused ? 1.02 : 1,
              }}
              transition={{duration: 0.2}}
            />
          )}
        </div>

        {/* Helper Text / Error Message */}
        {(helper || error) && (
          <motion.p
            className={cn(
              'mt-2 text-sm',
              error ? 'text-error-600' : 'text-secondary-600'
            )}
            initial={{opacity: 0, y: -10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.2}}
          >
            {error || helper}
          </motion.p>
        )}
      </motion.div>
    );
  }
);

Input.displayName = 'Input';

export {Input};
