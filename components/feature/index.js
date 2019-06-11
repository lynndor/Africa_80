const FeatureItem = props => {
  const { feature_icon, title, feature_content } = props.item;
  return (
    <div className='col-lg-4 col-md-6'>
      <div className='feature-item'>
        <i className={feature_icon} />
        <h4>{title}</h4>
        <p>{feature_content}</p>
        <a href='#' className='primary-btn2'>
          Learn more
        </a>
      </div>
    </div>
  );
};

export default FeatureItem;
