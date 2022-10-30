let fromServer = true;
let serverURI = 'http://myjson.dit.upm.es/api/bins/69f2';
let localURI = 'http://localhost:3000/posts';

fetch(fromServer ? serverURI : localURI)
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);

    let data = fromServer ? json.posts : json;

    data.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="PostArea">
		  	<div class="PostHead">
				<div class="PostAuthor"></div>
        <div class="PostAuthorName">${post.author}</div>
				<div class="PostDate">${new Date(post.createTime).toUTCString()}</div>
			</div>
      ${
        post.img ? '<div class="PostImg"><img src=' + post.img + '></div>;' : ''
      }
			  <div class="PostTextArea">${post.text}</div>
			<div class="PostMark"></div>
		</div>
      `;
      let divPosts = document.getElementsByClassName('Posts')[0];
      divPosts.appendChild(div);
    });
  });
