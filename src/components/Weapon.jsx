/* eslint-disable react/prop-types */
// import React from 'react'

import { faFloppyDisk, faMagicWandSparkles, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react"

const Weapon = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [weaponClass, setWeaponClass] = useState('');
  const [frame, setFrame] = useState('');
  const [impact, setImpact] = useState('');
  const [range, setRange] = useState('');
  const [stability, setStability] = useState('');
  const [handling, setHandling] = useState('');
  const [reloadSpeed, setReloadSpeed] = useState('');
  const [aimAssist, setAimAssist] = useState('');
  const [zoom, setZoom] = useState('');
  const [airEffect, setAirEffect] = useState('');
  const [rpm, setRPM] = useState('');
  const [mag, setMag] = useState('');
  const [recoil, setRecoil] = useState('');

  useEffect(() => {
    setName(props.weapon.name);
    setWeaponClass(props.weapon.weaponClass);
    setFrame(props.weapon.frame);
    setImpact(props.weapon.impact);
    setRange(props.weapon.range);
    setStability(props.weapon.stability);
    setHandling(props.weapon.handling);
    setReloadSpeed(props.weapon.reloadSpeed);
    setAimAssist(props.weapon.aimAssist);
    setZoom(props.weapon.zoom);
    setAirEffect(props.weapon.airEffect);
    setRPM(props.weapon.rpm);
    setMag(props.weapon.mag);
    setRecoil(props.weapon.recoil);
  },[]);

  const saveWeapon = () => {
    setEditMode(false);
    const updatedWeapon = {
      name: name, 
      weaponClass: weaponClass, 
      frame: frame, 
      impact: impact,
      range: range,
      stability: stability,
      handling: handling,
      reloadSpeed: reloadSpeed,
      aimAssist: aimAssist,
      zoom: zoom,
      airEffect: airEffect,
      rpm: rpm,
      mag: mag,
      recoil: recoil, 
      id: props.weapon.id, 
      image: props.weapon.image};
    props.updateWeapon(updatedWeapon)
  }

  return (
    <div className='card mb-3'>
      <img src={props.weapon.image} alt="weapon" className='card-image-top mx-auto w-100'/>
      {!editMode && 
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center fs-2'>{props.weapon.name}</li>
          <li className='list-group-item text-center fs-4'>{props.weapon.weaponClass}</li>
          <li className='list-group-item text-center'>{props.weapon.frame}</li>
          <li className='list-group-item text-center'>Impact: {props.weapon.impact}</li>
          <li className='list-group-item text-center'>Range: {props.weapon.range}</li>
          <li className='list-group-item text-center'>Stability: {props.weapon.stability}</li>
          <li className='list-group-item text-center'>Handling: {props.weapon.handling}</li>
          <li className='list-group-item text-center'>Reload Speed: {props.weapon.reloadSpeed}</li>
          <li className='list-group-item text-center'>Aim Assist: {props.weapon.aimAssist}</li>
          <li className='list-group-item text-center'>Zoom: {props.weapon.zoom}</li>
          <li className='list-group-item text-center'>Air Effectiveness: {props.weapon.airEffect}</li>
          <li className='list-group-item text-center'>RPM: {props.weapon.rpm}</li>
          <li className='list-group-item text-center'>Mag Size: {props.weapon.mag}</li>
          <li className='list-group-item text-center'>Recoil: {props.weapon.recoil}</li>
          <li className='list-group-item text-center d-flex flex-column'>
            <button type='button' className='btn btn-danger my-1' onClick={() => props.removeWeapon(props.weapon)}>Delete Weapon <FontAwesomeIcon icon={faWarning}/></button>
            <button type="button" className="btn btn-warning my-1" onClick={() => setEditMode(true)}>Edit Weapon <FontAwesomeIcon icon={faMagicWandSparkles}/></button>
          </li>
        </ul>
      }
      {editMode && 
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Name:<input type="text" className="form-control w-50" value={name} onChange={e => setName(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Class:<input type="text" className="form-control w-50" value={weaponClass} onChange={e => setWeaponClass(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Frame:<input type="text" className="form-control w-50" value={frame} onChange={e => setFrame(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Impact:<input type="number" className="form-control w-50" value={impact} onChange={e => setImpact(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Range:<input type="number" className="form-control w-50" value={range} onChange={e => setRange(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Stability<input type="number" className="form-control w-50" value={stability} onChange={e => setStability(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Handling<input type="number" className="form-control w-50" value={handling} onChange={e => setHandling(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Reload Speed<input type="number" className="form-control w-50" value={reloadSpeed} onChange={e => setReloadSpeed(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Aim Assist<input type="number" className="form-control w-50" value={aimAssist} onChange={e => setAimAssist(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Zoom<input type="number" className="form-control w-50" value={zoom} onChange={e => setZoom(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Air Effectiveness:<input type="number" className="form-control w-50" value={airEffect} onChange={e => setAirEffect(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>RPM: <input type="number" className="form-control w-50" value={rpm} onChange={e => setRPM(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Mag Size:<input type="number" className="form-control w-50" value={mag} onChange={e => setMag(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'>Recoil:<input type="number" className="form-control w-50" value={recoil} onChange={e => setRecoil(e.currentTarget.value)}/></li>
          <li className='list-group-item text-center d-flex justify-content-between align-items-center'><button type='button' className='btn btn-secondary' onClick={saveWeapon}>Save <FontAwesomeIcon icon={faFloppyDisk}/></button></li>
        </ul>
      }
    </div>
  )
}

export default Weapon