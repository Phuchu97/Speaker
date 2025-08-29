import {useRef, useEffect, useState} from 'react';
import {Form, type FormProps} from 'react-router';

type SearchFormProps = Omit<FormProps, 'children'> & {
  children: (args: {
    inputRef: React.RefObject<HTMLInputElement>;
    isFocused: boolean;
  }) => React.ReactNode;
  placeholder?: string;
  showShortcuts?: boolean;
};

/**
 * Search form component that sends search requests to the `/search` route.
 * @example
 * ```tsx
 * <SearchForm>
 *  {({inputRef, isFocused}) => (
 *    <>
 *      <input
 *        ref={inputRef}
 *        type="search"
 *        defaultValue={term}
 *        name="q"
 *        placeholder="Search…"
 *      />
 *      <button type="submit">Search</button>
 *   </>
 *  )}
 *  </SearchForm>
 */
export function SearchForm({
  children, 
  placeholder = "Search products, collections, and more...",
  showShortcuts = true,
  ...props
}: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  useFocusOnCmdK(inputRef);

  if (typeof children !== 'function') {
    return null;
  }

  return (
    <div className="relative">
      <Form method="get" {...props}>
        {children({inputRef, isFocused})}
      </Form>
      
      {/* Keyboard Shortcuts Hint */}
      {showShortcuts && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2 text-xs text-gray-400">
          <span className="hidden sm:inline">⌘K</span>
          <span className="hidden sm:inline">to search</span>
        </div>
      )}
    </div>
  );
}

/**
 * Focuses the input when cmd+k is pressed
 */
function useFocusOnCmdK(inputRef: React.RefObject<HTMLInputElement>) {
  // focus the input when cmd+k is pressed
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'k' && event.metaKey) {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === 'Escape') {
        inputRef.current?.blur();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [inputRef]);
}

/**
 * Default Search Input Component
 */
export function SearchInput({
  inputRef,
  placeholder,
  defaultValue,
  className = "",
  ...props
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="search"
        name="q"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-200 ${className}`}
        {...props}
      />
      
      {/* Search Icon */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Default Search Button Component
 */
export function SearchButton({
  children = "Search",
  className = "",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return (
    <button
      type="submit"
      className={`px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
