/* eslint-disable react/prop-types */
import { nanoid } from 'nanoid';
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './AddWeapon.css'

const AddWeapon = (props) => {
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
  const [selectedFile, setSelectedFile] = useState('');

  const doWork = () => {
    const newWeapon = {
      'id' : nanoid(),
      'name' : name,
      'weaponClass' : weaponClass,
      'frame' : frame,
      'impact' : impact,
      'range' : range,
      'stability' : stability,
      'handling' : handling,
      'reloadSpeed' : reloadSpeed,
      'aimAssist' : aimAssist,
      'zoom' : zoom,
      'airEffect' : airEffect,
      'rpm' : rpm,
      'mag' : mag,
      'recoil' : recoil,
      'image' : URL.createObjectURL(selectedFile)
    }

    props.addWeapon(newWeapon)
  }

  const imageUpdate = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div className='container mt-5' id='addWeapon'>
      <h3>Add Weapon</h3>
      <div className='row'>
        <div className='col-md-3'>
          <label htmlFor="txtName" className='form-label'>Name</label>
          <input 
            type="text" 
            name="txtName" 
            id="txtName" 
            placeholder='Name' 
            className='form-control' 
            onChange={(event) => setName(event.currentTarget.value)} 
            value={name}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="txtWeaponClass" className='form-label'>Weapon Class</label>
          <select name="txtWeaponClass" id="txtWeaponClass" className='form-select'
            onChange={(event) => setWeaponClass(event.currentTarget.value)} 
            value={weaponClass}>
            <option value="">Choose class</option>
            <option value="Auto Rifle">Auto Rifle</option>
            <option value="Combat Bow">Combat Bow</option>
            <option value="Fusion Rifle">Fusion Rifle</option>
            <option value="Glaive">Glaive</option>
            <option value="Grenade Launcher">Grenade Launcher</option>
            <option value="Hand Cannon">Hand Cannon</option>
            <option value="Linear Fusion Rifle">Linear Fusion Rifle</option>
            <option value="Machine Gun">Machine Gun</option>
            <option value="Pulse Rifle">Pulse Rifle</option>
            <option value="Rocket Launcher">Rocket Launcher</option>
            <option value="Scout Rifle">Scout Rifle</option>
            <option value="Shotgun">Shotgun</option>
            <option value="Sidearm">Sidearm</option>
            <option value="Sniper Rifle">Sniper Rifle</option>
            <option value="Submachine Gun">Submachine Gun</option>
            <option value="Sword">Sword</option>
            <option value="Trace Rifle">Trace Rifle</option>
          </select>
        </div>
        <div className='col-md-3'>
          <label htmlFor="txtFrame" className='form-label'>Frame</label>
          <input 
            type="text" 
            name="txtFrame" 
            id="txtFrame" 
            placeholder='Frame' 
            className='form-control'
            onChange={(event) => setFrame(event.currentTarget.value)} 
            value={frame}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="numImpact" className='form-label'>Impact</label>
          <input 
            type="number" 
            name="numImpact" 
            id="numImpact" 
            placeholder='Impact' 
            className='form-control'
            onChange={(event) => setImpact(event.currentTarget.value)} 
            value={impact}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
          <label htmlFor="numRange" className='form-label'>Range</label>
          <input 
            type="number" 
            name="numRange" 
            id="numRange" 
            placeholder='Range' 
            className='form-control'
            onChange={(event) => setRange(event.currentTarget.value)} 
            value={range}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="numStability" className='form-label'>Stability</label>
          <input 
            type="number" 
            name="numStability" 
            id="numStability" 
            placeholder='Stability' 
            className='form-control' 
            onChange={(event) => setStability(event.currentTarget.value)} 
            value={stability}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="numHandling" className='form-label'>Handling</label>
          <input 
            type="number" 
            name="numHandling" 
            id="numHandling" 
            placeholder='Handling' 
            className='form-control'
            onChange={(event) => setHandling(event.currentTarget.value)} 
            value={handling}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="numReloadSpeed" className='form-label'>Reload Speed</label>
          <input 
            type="number" 
            name="numReloadSpeed" 
            id="numReloadSpeed" 
            placeholder='Reload Speed' 
            className='form-control'
            onChange={(event) => setReloadSpeed(event.currentTarget.value)} 
            value={reloadSpeed}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
          <label htmlFor="numAimAssist" className='form-label'>Aim Assist</label>
          <input 
            type="number" 
            name="numAimAssist" 
            id="numAimAssist" 
            placeholder='Aim Assist' 
            className='form-control'
            onChange={(event) => setAimAssist(event.currentTarget.value)} 
            value={aimAssist}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="numZoom" className='form-label'>Zoom</label>
          <input 
            type="number" 
            name="numZoom" 
            id="numZoom" 
            placeholder='Zoom' 
            className='form-control'
            onChange={(event) => setZoom(event.currentTarget.value)} 
            value={zoom}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="numAirEffect" className='form-label'>Air Effectiveness</label>
          <input 
            type="number" 
            name="numAirEffect" 
            id="numAirEffect" 
            placeholder='Air Effectiveness' 
            className='form-control' 
            onChange={(event) => setAirEffect(event.currentTarget.value)} 
            value={airEffect}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="numRPM" className='form-label'>RPM</label>
          <input 
            type="number" 
            name="numRPM" 
            id="numRPM" 
            placeholder='RPM' 
            className='form-control'
            onChange={(event) => setRPM(event.currentTarget.value)} 
            value={rpm}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
          <label htmlFor="numMag" className='form-label'>Mag Size</label>
          <input 
            type="number" 
            name="numMag" 
            id="numMag" 
            placeholder='Mag Size' 
            className='form-control'
            onChange={(event) => setMag(event.currentTarget.value)} 
            value={mag}
          />
        </div>
        <div className='col-md-3'>
          <label htmlFor="numRecoil" className='form-label'>Recoil</label>
          <input 
            type="number" 
            name="numRecoil" 
            id="numRecoil" 
            placeholder='Recoil' 
            className='form-control'
            onChange={(event) => setRecoil(event.currentTarget.value)} 
            value={recoil}
          />
        </div>
        <div className='col-md-6'>
          <label htmlFor="fileUpload" className='form-label'>Weapon Image</label>
          <input type="file" name="fileUpload" id="fileUpload" className='form-control w-100' onChange={imageUpdate}/>
        </div>
      </div>
      <button type="button" className='btn btn-success btn-lg mt-4' id='btnAdd' onClick={doWork}>Add Weapon <FontAwesomeIcon icon={faPlusCircle}/></button>
    </div>
  )
}

export default AddWeapon