const on_submit = (config, values) => {
  fetch(`${config.domen}/widget/event`, {
    method: 'post',
    body: JSON.stringify({
      data: values,
      widget_id: config.widget_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export default on_submit
