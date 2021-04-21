# use-crypto

 [![npm](https://img.shields.io/npm/v/use-crypto.svg)](https://www.npmjs.com/package/use-crypto)  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/haefele-software/use-crypto/blob/main/LICENSE) <a href="https://bundlephobia.com/result?p=use-crypto@latest" target="\_parent">
  <img alt="" src="https://badgen.net/bundlephobia/minzip/use-crypto@latest" />
</a>

React hooks for all your cryptology needs.

#### `useAesCrypto`

```js
import { useAesCrypto } from 'use-crypto';

export default function App() {
  const { encrypt, decrypt } = useAesCrypto('SOME_KEY');

  return (
    ...
  );
}
```

## License

use-crypto is [MIT licensed](./LICENSE).
