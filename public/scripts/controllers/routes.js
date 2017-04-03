'use strict';

// eslint-disable-next-line
page('/', projectController.init)
// eslint-disable-next-line
page('/projects', projectController.init)
// eslint-disable-next-line
page('/about', aboutController.init)
// eslint-disable-next-line
page('/profiles', profileController.init);
// eslint-disable-next-line
page('/stats', statsController.init);
// eslint-disable-next-line
page();
