import {Fragment} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {Button} from './Button';
import {cn} from '~/lib/design-system';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
  closeOnBackdrop?: boolean;
  className?: string;
}

const sizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-7xl',
};

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnBackdrop = true,
  className,
}: ModalProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <Fragment>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            onClick={closeOnBackdrop ? onClose : undefined}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className={cn(
                'relative bg-white rounded-2xl shadow-2xl border border-secondary-200 w-full',
                sizes[size],
                className
              )}
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                type: "spring",
                duration: 0.3,
                damping: 25,
                stiffness: 300
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              {(title || description || showCloseButton) && (
                <div className="flex items-start justify-between p-6 border-b border-secondary-200">
                  <div className="flex-1">
                    {title && (
                      <motion.h2
                        className="text-xl font-semibold text-secondary-900 mb-1"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.1}}
                      >
                        {title}
                      </motion.h2>
                    )}
                    {description && (
                      <motion.p
                        className="text-secondary-600"
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.15}}
                      >
                        {description}
                      </motion.p>
                    )}
                  </div>

                  {showCloseButton && (
                    <motion.div
                      initial={{opacity: 0, scale: 0.8}}
                      animate={{opacity: 1, scale: 1}}
                      transition={{delay: 0.1}}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<XMarkIcon className="w-5 h-5" />}
                        onClick={onClose}
                        className="text-secondary-500 hover:text-secondary-700"
                      />
                    </motion.div>
                  )}
                </div>
              )}

              {/* Content */}
              <motion.div
                className="p-6"
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2}}
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}

// Confirmation Modal
interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'danger';
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default',
}: ConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      showCloseButton={false}
    >
      <div className="space-y-6">
        <p className="text-secondary-700 leading-relaxed">{message}</p>

        <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-2 sm:justify-end">
          <Button
            variant="outline"
            onClick={onClose}
            fullWidth
            className="sm:w-auto"
          >
            {cancelText}
          </Button>
          <Button
            variant={variant === 'danger' ? 'destructive' : 'primary'}
            onClick={handleConfirm}
            fullWidth
            className="sm:w-auto"
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
