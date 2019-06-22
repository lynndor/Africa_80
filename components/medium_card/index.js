const MediumCard = props => {
  const { number, text } = props.item;
  return (
    <div className='how-feature col-lg-3 col-md-6'>
      <div className='feature-item'>
        <h1 className='number'>{number}</h1>
        {/* <h4>{title}</h4> */}
        <p className='quote'>{text}</p>
      </div>
      <style jsx>{`
        .feature-item {
          background: #323358;
          padding: 40px;
          text-align: center;
          margin-bottom: 30px;
          box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.3);
        }
        .feature-item .number {
          background: #ffffff;
          padding: 18px;
          margin-bottom: 35px;
          font-size: 40px;
          display: inline-block;
          color: #30284c;
          border-radius: 55px;
        }
        .feature-item h4 {
          color: #ffffff;
        }
        .quote {
          font-weight: 500;
          color: #fafafa;
        }
        span {
          color: #323358;
        }
        .how-feature:nth-child(2n) {
          display: none;
          background: #black;
        }
      `}</style>
    </div>
  );
};

export default MediumCard;
