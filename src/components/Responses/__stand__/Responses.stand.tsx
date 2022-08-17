import { createStand } from '##/stand/standConfig';

import image from './Responses.image.svg';

export default createStand({
  title: 'Responses',
  id: 'Responses',
  group: 'components',
  image,
  description: 'Заглушки с сообщениями об ошибках и важных статусах.',
  version: '4.0.0',
  status: 'stable',
  sandbox:
    'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark',
  figma:
    'https://www.figma.com/embed?embed_host=uikit.consta.design&url=https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=20626%3A1902',
  order: 10,
});