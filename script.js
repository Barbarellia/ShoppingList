var data = {
    items: [{ text: 'Chleb', checked: true }, { text: 'Jabłka', checked: false }],
    title: 'Moja Lista Zakupów',
    newItem: ''
  };
  
  new Vue({
    el: '#app',
    data: data,
    methods: {
      addItem: function () {
        var text;
  
        text = this.newItem.trim();
        if (text) {
          this.items.push({
            text: text,
            checked: false
          });
          this.newItem = '';
        }
      }
    }
  });