'use strict';

// eslint-disable-next-line
page('/', projectController.init)
// eslint-disable-next-line
page('/about', aboutController.init)
// eslint-disable-next-line
page('/profiles', profileController.init);
// eslint-disable-next-line
page(); // A common error that people forget.
