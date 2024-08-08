import SafetyImage from '@/resources/images/img-SafetyPolicy.jpg';

function SafetyPolicy() {
  return (
    <>
      <div className="conts-title">
        <h2>안전정책</h2>
      </div>
      {/*상세페이지*/}
      <div className="editbox NoLine">
        <div className="form-table">
          <div className="form-cell wid100">
            <div className="form-group wid100">
              <div className="img">
                <img src={SafetyImage} className="img-thumbnail" alt="Safety Policy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*//상세페이지*/}
    </>
  );
}

export default SafetyPolicy;
