
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName
}) => {
  return (
    <div 
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'text-right',
        className
      )}
    >
      {subtitle && (
        <p 
          className={cn(
            'uppercase tracking-wider font-medium text-sm text-magsum-purple mb-2',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
      <h2 
        className={cn(
          'text-3xl md:text-4xl font-bold gradient-text',
          titleClassName
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
