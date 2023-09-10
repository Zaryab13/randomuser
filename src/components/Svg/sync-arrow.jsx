import React from 'react'

const SyncArrow  = ({className}) => {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" id="sync-arrow"><g transform="scale(8)"><path d="M32 21h-1.586l2.293-2.293c.391-.391.391-1.023 0-1.414-.391-.391-1.023-.391-1.414 0l-4 4c-.391.391-.391 1.023 0 1.414l4 4c.195.195.451.293.707.293.256 0 .512-.098.707-.293.391-.391.391-1.023 0-1.414l-2.293-2.293h1.586c6.065 0 11 4.935 11 11 0 .553.447 1 1 1 .553 0 1-.447 1-1 0-7.168-5.832-13-13-13zM32.707 37.293c-.391-.391-1.023-.391-1.414 0-.391.391-.391 1.023 0 1.414l2.293 2.293h-1.586c-6.065 0-11-4.935-11-11 0-.552-.448-1-1-1-.552 0-1 .448-1 1 0 7.168 5.832 13 13 13h1.586l-2.293 2.293c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293.256 0 .512-.098.707-.293l4-4c.391-.391.391-1.023 0-1.414l-4-4z"></path><path d="M32,7c-13.785,0 -25,11.215 -25,25c0,13.785 11.215,25 25,25c13.785,0 25,-11.215 25,-25c0,-13.785 -11.215,-25 -25,-25Zm0,48c-12.682,0 -23,-10.317 -23,-23c0,-12.682 10.318,-23 23,-23c12.683,0 23,10.318 23,23c0,12.683 -10.317,23 -23,23Z"></path></g></svg>
}

export default SyncArrow;