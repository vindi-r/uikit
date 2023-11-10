import './DragNDropFieldTooltip.css';

import React from 'react';

import { Text } from '##/components/Text/Text';
import { Tooltip } from '##/components/TooltipCanary';
import { cnMixSpace } from '##/mixs/MixSpace';
import { cn } from '##/utils/bem';

type DragNDropFieldTooltipProps = {
  anchorRef: React.RefObject<HTMLElement>;
  errors: string[];
};

const cnDragNDropFieldTooltip = cn('DragNDropFieldTooltip');

export const DragNDropFieldTooltip: React.FC<DragNDropFieldTooltipProps> = ({
  anchorRef,
  errors,
}) => {
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    setIsHidden(false);
  }, [errors]);

  return (
    <Tooltip
      isOpen={isHidden || errors.length === 0}
      anchorRef={anchorRef}
      status="alert"
      size="l"
      isInteractive={false}
      onClickOutside={() => setIsHidden(true)}
    >
      <Text size="s" className={cnDragNDropFieldTooltip('Text')}>
        {errors.length === 1 ? (
          errors[0]
        ) : (
          <ul
            className={cnDragNDropFieldTooltip('List', [
              cnMixSpace({ pL: 'xl' }),
            ])}
          >
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
      </Text>
    </Tooltip>
  );
};
