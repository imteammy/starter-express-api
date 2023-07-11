// Routes.js

  app.get('/:models', GetAll);

  app.post('/:models/id', auth, GetID);
  app.post('/:models/add', auth, Create);

  app.post('/:models/addmany',auth, CreateMany);

  app.post('/:models/update', auth, Update);
  app.put('/:models/update', auth, Update);
  
  app.post('/:models/delete', auth, Remove);
  app.delete('/:models/delete', auth, Remove);

  app.post('/clear', Clear);