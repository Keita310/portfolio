import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar as fasStar, fasStarHalfAlt} from '@fortawesome/free-solid-svg-icons'
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons'

/**
 * レベル星を表示するコンポーネント
 * (引数に1-5の数値を渡す)
 * 使用例：<SkillStar level={skill.level} />
 *
 */
const SkillStar = ({ level }) => {
  let icons = [];
  for (let i = 1; i <= 5; i++) {
    let diff = level - i;
    if (diff >= 0) {
      icons.push(fasStar);
    } else {
      if (diff > -1) {
        icons.push(fasStarHalfAlt);
      } else {
        icons.push(farStar);
      }
    }
  }
  return (
    <div className="skill-star">
      {icons.map((icon, index) => (
        <FontAwesomeIcon icon={icon} key={index} />
      ))}
    </div>
  )
}

export default SkillStar
