import React, { useState } from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Combobox } from '../../../Combobox';

type Item = {
  label: string;
  id: number;
};

const items: Item[] = [
  {
    label: 'Первый',
    id: 1,
  },
  {
    label: 'Второй',
    id: 2,
  },
  {
    label: 'Третий',
    id: 3,
  },
];

export const ComboboxExampleItems = () => {
  const [value, setValue] = useState<Item | null>();
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Combobox
        items={items}
        value={value}
        onChange={({ value }) => setValue(value)}
        placeholder="Выберите что-нибудь хорошее"
      />
    </StoryBookExample>
  );
};
