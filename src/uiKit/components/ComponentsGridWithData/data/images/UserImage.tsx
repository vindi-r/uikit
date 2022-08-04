import * as React from 'react';

const UserImage = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 200 120" fill="none" {...props}>
      <path
        d="M0 4a4 4 0 014-4h192a4 4 0 014 4v112a4 4 0 01-4 4H4a4 4 0 01-4-4V4z"
        fill="#fff"
      />
      <circle cx={40} cy={60} r={16} fill="#fff" />
      <path
        d="M52.279 70.203A15.986 15.986 0 1024 60c0 3.732 1.316 7.345 3.715 10.204l-.023.02c.08.096.171.178.253.273.103.117.214.228.32.342.32.348.65.681.994.995.106.095.214.185.32.276.366.315.742.615 1.132.894.05.034.096.078.146.114v-.014a15.884 15.884 0 0018.282 0v.014c.05-.036.095-.08.146-.115.389-.28.766-.578 1.132-.893.106-.091.214-.182.32-.276.344-.315.673-.647.993-.995.107-.114.216-.225.32-.342.082-.095.174-.177.254-.275l-.025-.018zM39.997 50.858a5.142 5.142 0 110 10.284 5.142 5.142 0 010-10.284zm-9.133 19.345a5.708 5.708 0 015.705-5.633h6.856a5.709 5.709 0 015.705 5.633 13.643 13.643 0 01-18.266 0z"
        fill="#0078D2"
      />
      <path fill="#002033" fillOpacity={0.3} d="M68 46h112v12H68z" />
      <path fill="#DEE4E8" d="M68 62h56v12H68z" />
    </svg>
  );
};

export default UserImage;
