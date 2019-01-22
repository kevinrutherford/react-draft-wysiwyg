import React from 'react';
import PropTypes from 'prop-types';

const Embed = ({ block, contentState }) => {
  const entity = contentState.getEntity(block.getEntityAt(0));
  const { src, height, width } = entity.getData();
  return (
    <div class="embed-responsive embed-responsive-16by9">
      <iframe
        className='embed-responsive-item'
        height={height}
        width={width}
        src={src}
        frameBorder="0"
        allowFullScreen
        title="Embedded content"
        />
    </div>
  )
};

Embed.propTypes = {
  block: PropTypes.object,
  contentState: PropTypes.object,
};

export default Embed;

