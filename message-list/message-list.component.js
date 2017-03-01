// Register `messageList` component, along with its associated controller and template
angular.
  module('messageList').
  component('messageList', {
    template: 
'	<div class="container">																									'+
'                                                                                                                           '+
'	<div class="row">                                                                                                       '+
'		<div class="col-6 offset-3">                                                                                        '+
'			<form>                                                                                                          '+
'				<div class="form-group">                                                                                    '+
'					<input class="form-control" id="name" ng-model="message.name" type="text" placeholder="Name">           '+
'				</div>			                                                                                            '+
'				<div class="form-group">                                                                                    '+
'					<input class="form-control" id="message-title" ng-model="message.title" type="text" placeholder="Message Title">'+
'				</div>'+
'				<div class="form-group">'+
'					<input class="form-control" id="message-content" ng-model="message.content" type="text" placeholder="Message">'  +
'				</div>                                                                                                            '  +
'				<div id="but"><button class="btn btn-primary" ng-click="submitMessage(message)" type="button">Submit Message</button>   </div>        '  +
'			</form>                                                                                                               '  +
'		</div>                                                                                                                    '  +
'	</div>                                                                                                                        '  +
'                                                                                                                                 '  +
'	<div class="row">                                                                                                             '  +
'	  <ul id="message-list">                                                                                                      '  +
'	    <li ng-repeat="message in messages| reverse" class="message">                                                                                      '  +
'	      <div><strong>{{message.title}}</strong> Posted By:   '+
'	    	<i>{{message.name}}</i></div>                                                                                     '  +
'	      <p> {{message.content}}</p>                                                                                     '  +
'	    </li>                                                                                                                     '  +
'	  </ul>                                                                                                                       '  +
'	</div>                                                                                                                        '  +
'</div>',
    controller: function MessageListController($scope) {

	//var listeningFirebaseRefs = [];

      $scope.messages = []

      messagesRef = firebase.database().ref('messages/');
     messagesRef.on('value', function(snapshot) {
        if(snapshot.val()) {
		 $scope.messages = snapshot.val();
		$scope.$digest();
        }
      });

	  
	  
	  
 /* function startDatabaseQueries() {
  // [START my_top_posts_query]
 // var myUserId = firebase.auth().currentUser.uid;
  // [END my_top_posts_query]
  // [START recent_posts_query]
  var recentPostsRef = firebase.database().ref('messages/').limitToLast(10);
  // [END recent_posts_query]

  var fetchPosts = function(postsRef) {
    postsRef.on('child_added', function(data) {
       $scope.messages = []

         if(data.val()) {
			 console.log("This is data"+data.val());
		 $scope.messages = data.val();
        }
	  });}
	  
	  
	    fetchPosts(recentPostsRef);
  listeningFirebaseRefs.push(recentPostsRef);

	  }
 
 startDatabaseQueries();*/
 
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
		message.title= ""; 
		message.content="";
      };
    }
  })
  .filter('reverse', function() {
  return function(items) {
	  if (items.constructor === Array){
	  //console.log(items)
	  //console.log(items.constructor === Array)
	  return items.slice().reverse();
	  }
	  else{
		  return items;
	  }
  };
});