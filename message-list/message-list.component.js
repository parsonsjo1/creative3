// Register `messageList` component, along with its associated controller and template
angular.
  module('messageList').
  component('messageList', {
    templateUrl: 'message-list/message-list.template.html',
    controller: function MessageListController() {
      this.messages = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];

      messagesRef = firebase.database().ref('messages/');
      messagesRef.on('value', function(snapshot) {
        this.messages = snapshot.val();
      });

      this.submitMessage = function(name, title, content) {
        firebase.database().ref('messages/' + $scope.messages.length).set({
          name: name,
          title: title,
          content : content
        });
      };
    }
  });