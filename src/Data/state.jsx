import ReRenderDom from '../render';




let state = {
walls_posts: {
    posts: [
        {id:1, like: 12, message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},
        {id:2, like: 15, message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula. Molestie nunc non blandit massa enim nec dui nunc mattis.'},
        {id:3, like: 7, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit amet dictum.'}
    ],
    new_post_text: " "
    },
message_text: {
    user_id: [
        {id:2, name: 'Grzegorz Korczowski'},
        {id:3, name: 'Andrzej Kowalski'},
        {id:4, name: 'Igor Torunski'},
        {id:6, name: 'Daria Lidowska'}
    ],
    user_messages: [
        {id:2, message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
        {id:3, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id:4, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {id:5, message: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'}
    ]
}
};

window.state = state;


export let Add_button__state = (text) => {
//   debugger;
    let newPost = {
        id: 4,
        like: 1,
        message: text
    }
    state.walls_posts.posts.push(newPost);
    ReRenderDom(state, Add_button__state);
};

export let Update_textarea_post = (NewText) => {
        state.walls_posts.new_post_text = NewText;
        ReRenderDom(state, Add_button__state);
    };

export default state;
