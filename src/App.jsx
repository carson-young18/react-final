import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { nanoid } from 'nanoid'
import AddWeapon from './components/AddWeapon';
import _ from 'lodash';
import Weapon from './components/Weapon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [allWeapons, setAllWeapons] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [keywords, setKeywords] = useState('');
  const [weaponClass, setWeaponClass] = useState('')

  useEffect(() => {
    if(localStorage){
      const weaponsLocalStorage = JSON.parse(localStorage.getItem('weapons'));

      if(weaponsLocalStorage){
        saveWeapons(weaponsLocalStorage);
      }
      else{
        saveWeapons(weapons);
      }
    }
    saveWeapons(weapons);
  }, []);


  const weapons = [{
    id: nanoid(),
    name: "Firefright",
    weaponClass: "Auto Rifle",
    frame: "Precision Frame",
    image: 'images/firefright.jpg',
    impact: 29,
    range: 58,
    stability: 41,
    handling: 41,
    reloadSpeed: 44,
    aimAssist: 38,
    zoom: 17,
    airEffect: 17,
    rpm: 450,
    mag: 34,
    recoil: 61
  },
  {
    id: nanoid(),
    name: "Fatebringer",
    weaponClass: "Hand Cannon",
    frame: "Adaptive Frame",
    image: 'images/fatebringer.jpg',
    impact: 84,
    range: 46,
    stability: 57,
    handling: 55,
    reloadSpeed: 46,
    aimAssist: 84,
    zoom: 14,
    airEffect: 10,
    rpm: 140,
    mag: 10,
    recoil: 98
  },
  {
    id: nanoid(),
    name: "Matador 64",
    weaponClass: "Shotgun",
    frame: "Precision Frame",
    image: 'images/matador.jpg',
    impact: 70,
    range: 65,
    stability: 48,
    handling: 43,
    reloadSpeed: 48,
    aimAssist: 65,
    zoom: 12,
    airEffect: 2,
    rpm: 65,
    mag: 5,
    recoil: 77
  },
  {
    id: nanoid(),
    name: "The Recluse",
    weaponClass: "Submachine Gun",
    frame: "Lightweight Frame",
    image: 'images/recluse.jpg',
    impact: 15,
    range: 40,
    stability: 47,
    handling: 63,
    reloadSpeed: 28,
    aimAssist: 55,
    zoom: 13,
    airEffect: 19,
    rpm: 900,
    mag: 36,
    recoil: 100
  },
  {
    id: nanoid(),
    name: "Bygones",
    weaponClass: "Pulse Rifle",
    frame: "Adaptive Frame",
    image: 'images/bygones.jpg',
    impact: 29,
    range: 48,
    stability: 55,
    handling: 46,
    reloadSpeed: 46,
    aimAssist: 61,
    zoom: 17,
    airEffect: 10,
    rpm: 390,
    mag: 39,
    recoil: 69
  },
  {
    id: nanoid(),
    name: "Eye of Sol",
    weaponClass: "Sniper Rifle",
    frame: "Adaptive Frame",
    image: 'images/sol.jpg',
    impact: 70,
    range: 50,
    stability: 49,
    handling: 46,
    reloadSpeed: 40,
    aimAssist: 68,
    zoom: 45,
    airEffect: 5,
    rpm: 90,
    mag: 4,
    recoil: 72
  },
  {
    id: nanoid(),
    name: "Calus Mini-Tool",
    weaponClass: "Submachine Gun",
    frame: "MIDA Synergy",
    image: 'images/calus.jpg',
    impact: 15,
    range: 30,
    stability: 49,
    handling: 65,
    reloadSpeed: 31,
    aimAssist: 49,
    zoom: 14,
    airEffect: 28,
    rpm: 900,
    mag: 37,
    recoil: 80
  },
  {
    id: nanoid(),
    name: "Fixed Odds",
    weaponClass: "Machine Gun",
    frame: "High-Impact Frame",
    image: 'images/fixed.jpg',
    impact: 70,
    range: 63,
    stability: 28,
    handling: 30,
    reloadSpeed: 31,
    aimAssist: 33,
    zoom: 16,
    airEffect: 16,
    rpm: 360,
    mag: 44,
    recoil: 66
  },
];

  const saveWeapons = (weapons) => {
    setAllWeapons(weapons);
    setSearchResults(weapons);
    if(localStorage){
      localStorage.setItem('weapons', JSON.stringify(weapons));
      console.log('saved to local storage');
    }
  }

  const addWeapon = (newWeapon) => {
    const updatedWeapons = [...allWeapons, newWeapon]
    saveWeapons(updatedWeapons);
  }

  const removeWeapon = (weaponToDelete) => {
    // console.table(studentToDelete);
    const updatedWeaponArray = allWeapons.filter(weapon => weapon.id !== weaponToDelete.id);
    saveWeapons(updatedWeaponArray);
  }

  const updateWeapon = (updatedWeapon) => { 
    // console.table(updatedStudent)
    const updatedWeaponArray = allWeapons.map(weapon => weapon.id === updatedWeapon.id ? {...weapon, ...updatedWeapon} : weapon)
    saveWeapons(updatedWeaponArray);
  }

  const searchWeapons = () => {
    let keywordsArray = [];
    if(keywords){
      keywordsArray = keywords.toLowerCase().split(' ');
    }

    if(weaponClass){
      keywordsArray.push(weaponClass)
    }

    if(keywordsArray.length > 0){
      const searchResults = allWeapons.filter(weapon => {
        for(const word of keywordsArray){
          if(weapon.name.toLowerCase().includes(word) ||
             weapon.weaponClass === word){
              return true;
             }
        }
        return false;
      });
      setSearchResults(searchResults);
    } 
    else {
      setSearchResults(allWeapons);
    }
  }

  return (
    <div className='container'>
      <div className='row' id='allWeapons'>
        <h3>Weapons</h3>
        {searchResults && searchResults.map((weapon) => (
          <div className='col-lg-3' key={weapon.id}>
            <Weapon weapon={weapon} removeWeapon={removeWeapon} updateWeapon={updateWeapon}/>
          </div>
        ))}

      </div>

      {/* {!allWeapons && <button type='button' className='btn btn-large btn-success' onClick={() => setallWeapons(students)}>Save Students</button>} */}
    
      <AddWeapon addWeapon={addWeapon}/>
      <div className='row mt-4' id='searchWeapons'>
        <h3>Search Weapons</h3>
        <div className='col-md-4'>
          <label htmlFor="txtKeywords">Search by Name</label>
          <input type="text" className='form-control' placeholder='Search Name' id='txtKeywords' name='txtKeywords' onChange={e => setKeywords(e.currentTarget.value)} value={keywords}/>
        </div>
        <div className='col-md-4'>
          <label htmlFor="select">Search by Weapon Class</label>
          <select className='form-select' value={weaponClass} onChange={e => setWeaponClass(e.currentTarget.value)}>
            <option value="">Select Class</option>
            {_(allWeapons).map(weapon => weapon.weaponClass).sort().uniq().map(weaponClass => <option key={weaponClass} value={weaponClass}>{weaponClass}</option>).value()}
          </select>
        </div>
        <div className='col-md-4 mt-3'>
          <button type='button' className='btn btn-lg btn-primary' onClick={searchWeapons}>Search Weapons <FontAwesomeIcon icon={faSearch}/></button>
        </div>
      </div>
    </div>
  )
}

export default App
