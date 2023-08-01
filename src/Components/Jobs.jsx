import React from 'react'
import {BiTimeFive} from 'react-icons/bi'
import Logo1 from '../Assets/Logo (1).png'
import Logo2 from '../Assets/Logo (2).png'
import Logo3 from '../Assets/Logo (3).png'
import Logo4 from '../Assets/Logo (4).png'
import Logo5 from '../Assets/Logo (5).png'
import Logo6 from '../Assets/Logo (6).png'
import Logo7 from '../Assets/Logo (7).png'
import Logo8 from '../Assets/Logo (8).png'

const Data =[
  {
    id:1,
    image: Logo1,
    title: 'Web Developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni.',
    company: 'Hewlett Packard'
  },
  {
    id:2,
    image: Logo2,
    title: 'UI Designer',
    time: '30 mins',
    location: 'Florida, USA',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni.',
    company: 'Amazon'
  },
  {
    id:3,
    image: Logo3,
    title: 'Cloud Dev',
    time: '1Hr',
    location: 'Manchester',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni.',
    company: 'Novac Linus CO.'
  },
  {
    id:4,
    image: Logo4,
    title: 'MERN Dev',
    time: '2Hrs',
    location: 'Mexico City',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni.',
    company: 'Nutella'
  },
  {
    id:5,
    image: Logo5,
    title: 'Graphic Design',
    time: '3Hrs',
    location: 'London, UK',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni.',
    company: 'Instagram'
  },
  {
    id:6,
    image: Logo6,
    title: 'Java Dev',
    time: '14Hrs',
    location: 'Bangalore, India',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni.',
    company: 'Dell'
  },
  {
    id:7,
    image: Logo7,
    title: 'Brand Manager',
    time: '18Hrs',
    location: 'Singapore',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni.',
    company: 'Huawei'
  },
  {
    id:8,
    image: Logo8,
    title: 'SEO Dev',
    time: '20Hrs',
    location: 'Tokyo, Japan',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, magni.',
    company: 'Adidas'
  },
]

function Jobs() {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {
          Data.map(({id,image,title,time,location,desc,company}) => {
            return (
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg">
          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive />{time}
            </span>
          </span>
          <h6 className='text-[#ccc] hover:text-white'>{location}</h6>
          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{desc}</p>
          <div className='company flex items-center gap-2'>
              <img src={image} alt="Logo" className='w-[10%]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>  
          </div>
          <button className='border-[2px] rounded-[10px] block px-[18px] py-2 w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black'>Apply Now</button>
        </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Jobs