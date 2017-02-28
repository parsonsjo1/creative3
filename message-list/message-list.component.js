// Register `messageList` component, along with its associated controller and template
angular.
  module('messageList').
  component('messageList', {
    templateUrl: 'message-list/message-list.template.html',
    controller: function MessageListController($scope) {

      $scope.messages = []

      messagesRef = firebase.database().ref('messages/');
      messagesRef.on('value', function(snapshot) {
        if(snapshot.val()) {
          $scope.messages = snapshot.val();
        }
      });

      $scope.submitMessage = function(message) {
        //console.log(message);

        if(!message || !message.name || !message.title || !message.content)
          return
        //console.log($scope.messages.length);
        firebase.database().ref('messages/' + $scope.messages.length).set({
          name: message.name,
          title: message.title,
          content : message.content
        });
      };
    }
  });