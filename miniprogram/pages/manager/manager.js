
function get_by_date(date) {
  const db = wx.cloud.database();
  db.collection('records').where({
                    //如何判断日期？？？
  }).get({
    success: (res) => {
      return res
    }
  })
}


function get_by_person(person) {
  const db = wx.cloud.database();
  db.collection('workers').where({
    name: person
  }).get({
    success: (res) => {
      db.collection('records').where({
        worker: res[0]
      }).get({
        success: (records) => {
          return records;
        }
      })
    }
  });

}