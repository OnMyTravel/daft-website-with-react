import React from 'react';

const Modale = (props) => (
  <div class="charte__frame">
    <div class="modale">
      <div class="modale-title">{props.title}<div class="modale-subtitle">{', ' + props.subtitle}</div></div>
      <div class="modale-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet tortor a libero laoreet vulputate in commodo arcu. Sed felis lorem, molestie vitae accumsan vitae, sollicitudin sed nibh. Quisque at imperdiet erat, scelerisque tempus sem. Quisque vehicula ultrices nulla, vitae interdum dui. Pellentesque eu pulvinar urna. Vestibulum at mauris sed velit elementum faucibus. Nam quis massa libero. Fusce at dui ut ipsum auctor efficitur.
      </div>
    </div>
  </div>
)

export default Modale