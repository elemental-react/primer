import { extend, Image } from 'elemental-react';

const Avatar = extend(Image, ({ size, src }) => ({
  width: size,
  height: size,
  source: src,
  borderRadius: 3,
}));

// Avatar.defaultProps = {
//   source: 'https://avatars.githubusercontent.com/primer',
// };

export default Avatar;
