module.exports=function(app) {
  // app.get('/api/widget', helloworld);
  //
  // function helloworld(req, res) {
  //   console.log("Get hello widget!");
  //   res.status(200).send("Hello world widget...");
  // }

  //POST calls
  app.post("/api/page/:pageId/widget", createWidget);
  //app.post ("/api/upload", upload.single('myFile'), uploadImage);
  //Get calls
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  //Put calls
  app.put("/api/widget/:widgetId", updateWidget);
  //app.put("/page/:pageId/widget", reSortWidget);
  //delete calls
  app.delete("/api/widget/:widgetId", deleteWidget);

  var widgets = [
    {_id: '123', type: 'HEADER', pageId: '321',size:  '2', text:'GOP Releases Formerly Classified Memo Critical Of FBI' },
    {_id: '234', type: 'HEADER', pageId: '321',size: '4', text: 'It hints at a new GOP target: deputy attorney general' },
    {_id: '345', type: 'IMAGE', pageId: '321',size:  '2',text: 'text', width:'100%',
      url: 'https://media.fox5dc.com/media.fox5dc.com/photo/2018/02/01/trump_classified_1517500733623_4880181_ver1.0_640_360.jpg'},
    {_id: '456', type: 'HTML', pageId: '321',size: '2', text: '<p>blalbla</p>' },
    {_id: '567', type: 'HEADER', pageId: '321', size: '4', text: 'Memo asserts bias on part of FBI investigation in Russia probe'},
    {_id: '678', type: 'YOUTUBE', pageId: '321', size: '2',text:  'text', width: '100%', url: 'https://www.youtube.com/embed/I84wnvEqGXc'},
  ];

  function createWidget(req, res) {
    var pageId = req.params['pageId'];
    var widget = req.body;
    widget._id = (new Date()).getTime() + "";
    widget.pageId = pageId;
    widgets.push(widget);
    res.json(widget);
  }

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    var widgets_list = [];
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i].pageId === pageId) {
        widgets_list.push(widgets[i]);
      }
    }
    res.json(widgets_list);
  }

  function findWidgetById(req, res) {
    var widgetId = req.params["widgetId"];
    var found_widget = null;
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        found_widget = widgets[i];
      }
    }
    if (found_widget) {
      res.status(200).send(found_widget);
    } else {
      res.status(404).send('findWidgetById Not Found');
    }
  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    if (!widget) {
      res.status(404).send('Update error');
    }
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets[i] = widget;
      }
    }

    res.json(widget);
  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    for (var i = 0; i < widgets.length; i++) {
      if (widgets[i]._id === widgetId) {
        widgets.slice(i, 1);
      }
    }
    res.json(widgets);
  }

}
