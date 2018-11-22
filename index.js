exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'white',
    cursorColor: 'white',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: white;
      }
      .tabs_nav .tabs_title {
        color: white;
      }
    `
  });
}
