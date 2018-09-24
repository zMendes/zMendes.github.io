
document.addEventListener('DOMContentLoaded', function() {

  let db = connect('https://mp10-ad769.firebaseio.com/')

  let params = extract()

  let path = '/' + params['category'] + '/courses/' + params['course']

  db.download(path, function(data) {
    replace('body', {
        'name': data['name'],
        'title1': data['title1'],
        'title2': data['title2'],
        'title3': data['title3'],
        'text1': data['text1'],
        'text2': data['text2'],
        'text3': data['text3'],
        'img': data['img']

    })
    replace('head',{
      'name': data['name']
    })
  })
})
