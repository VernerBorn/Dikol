import React from 'react';

export type WrappedComponent = {
  accessibilityLabel?: string;
  decorative?: boolean;
  className: string;
}

export type Props = {
  className: string;
  role: string;
  'aria-hidden'?: boolean;
  'aria-label'?: string
};

export default function withIcon(name: string) {
  // eslint-disable-next-line
  const displayName = name;
  return (WrappedComponent: React.FC<Props>) => (props: WrappedComponent) => {
    const { accessibilityLabel, decorative, className } = props;
    let newProps: Props = {
      className: className,
      role: decorative ? 'presentation' : 'img'
    };

    if (decorative) {
      newProps['aria-hidden'] = true;
    }

    if (accessibilityLabel) {
      newProps['aria-label'] = accessibilityLabel;
    }
    return <WrappedComponent {...newProps} />
  }
}
