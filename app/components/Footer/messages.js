/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.author.message`,
    defaultMessage: 'Created by the team of Golgi Apparatus.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by the team of Golgi Apparatus.
    `,
  },
});
