import { isWebUri } from 'valid-url'

function validURL(str) {
    return isWebUri(str);
}

export { validURL }
