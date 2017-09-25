/* eslint-disable no-unused-vars */

$(document).ready(function() {
  console.log('Ready!')
})

$('body').bind('touchstart', function() {})

function findObjById (id, array) {
  for (var i = 0; i < array.length; i++) {
    var arrObj = array[i]
    if (id === arrObj.id) {
      return arrObj
    }
  }
}

$('.curios img').hover(function() {
    $(this).data('original', this.src)
    var dataId = $(this).attr('data-id')
    var foundObj = findObjById(dataId, curios)
    this.src = foundObj.provsrc
    var msg = foundObj.message
    var $msg = document.querySelectorAll('.msg')
    for (var i = 0; i < $msg.length; i++) {
      $msg[i].textContent = msg
      if (msg.indexOf('Stress Heal') !== -1) {
        $msg[i].style.color = "#88b04b"
      }
      else if (msg.indexOf('Gold') !== -1) {
        $msg[i].style.color = "gold"
      }
      else if (msg.indexOf('Buff') !== -1) {
        $msg[i].style.color = "#0042ff"
      }
      else if (msg.indexOf('Quirk') !== -1) {
        $msg[i].style.color = "#a819ff"
      }
      else if (msg.indexOf('Heirloom') !== -1) {
        $msg[i].style.color = "lightblue"
      }
      else if (msg.indexOf('Torch') !== -1) {
        $msg[i].style.color = "#fa540a"
      }
      else {
        $msg[i].style.color = "white"
      }
    }
  },
  function() {
    this.src = $(this).data('original')
    var $msg = document.querySelectorAll('.msg')
    for (var i = 0; i < $msg.length; i++) {
      $msg[i].textContent = ''
  }
})

$('input').click(function () {
  var dataId = $(this).attr('data-id')
  var foundObj = findObjById(dataId, provisions)
  $(this).closest('.location').find('.provdisplay').attr('src', foundObj.src)
})

var curios = [
  {
    id: '1',
    src: 'images/curios/all/crate.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Heirloom(75%), Nothing(25%)'
  },
  {
    id: '2',
    src: 'images/curios/all/discarded-pack.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Supplies x1 + Gold/Gems x2 + Journal Entry(60%), Scouting(20%), Nothing(20%)'
  },
  {
    id: '3',
    src: 'images/curios/all/eldritch-altar.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Purge Negative Quirk(100%)'
  },
  {
    id: '4',
    src: 'images/curios/all/heirloom-chest.png',
    provsrc: 'images/provisions/skeleton-key.png',
    message: 'Heirlooms x4(100%). Without cleansing: Heirlooms x2(75%), Bleed(12.5%), Blight(12.5%)'
  },
  {
    id: '5',
    src: 'images/curios/all/locked-strongbox.png',
    provsrc: 'images/provisions/shovel-key.png',
    message: 'Key: Any Loot x3(100%). Shovel: Any Loot x2(66.7%), Nothing(33.3%)'
  },
  {
    id: '6',
    src: 'images/curios/all/sack.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Gold(75%), Nothing(25%)'
  },
  {
    id: '7',
    src: 'images/curios/all/sconce.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Torch x1(100%)'
  },
  {
    id: '8',
    src: 'images/curios/all/shamblers-altar.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Summon Shambler by using Torch (Warning: Be Prepared)'
  },
  {
    id: '9',
    src: 'images/curios/all/stack-of-books.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Stress +25(22.2%), Random Positive Quirk(22.2%), Journal Entry(16.7%), Nothing(16.7%), Random Negative Quirk(11.1%), Decrease Light 25(11.1%)'
  },
  {
    id: '10',
    src: 'images/curios/all/locked-strongbox.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Any Loot x2(75%), Blight(25%)'
  },
  {
    id: '11',
    src: 'images/curios/ruins/alchemy-table.png',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Gold/Gems x2(100%)'
  },
  {
    id: '12',
    src: 'images/curios/ruins/altar-of-light.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Buff DMG +30% Until Camp(100%). Without cleansing: Buff DMG +20% Until Camp(100%)'
  },
  {
    id: '13',
    src: 'images/curios/ruins/bookshelf.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Scouting(20%), Stress +15(20%), Journal Entry(20%), Nothing(20%), Positive Quirk(13.3%), Negative Quirk(6.7%)'
  },
  {
    id: '14',
    src: 'images/curios/ruins/confession-booth.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Stress Heal 30(100%). With no provision: Stress +15(50%), Gold/Trinket x6(25%), Purge Negative Quirk(25%)'
  },
  {
    id: '15',
    src: 'images/curios/ruins/decorative-urn.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Gold/Trinket x2 + Gems x2(100%)'
  },
  {
    id: '16',
    src: 'images/curios/ruins/holy-fountain.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Stress Heal 20, Cure Status Effects, Heal 12 HP(100%). Without cleansing: Stress Heal 10 + Cure Status Effects + Heal 5HP(50%), Gold/Gems x2(50%)'
  },
  {
    id: '17',
    src: 'images/curios/ruins/iron-maiden.png',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Any Loot x2(100%)'
  },
  {
    id: '18',
    src: 'images/curios/ruins/locked-display-cabinet.png',
    provsrc: 'images/provisions/shovel-key.png',
    message: 'Key: Gold/Heirlooms x3 + Gold/Gems x2(100%). Shovel: Gold/Heirlooms x2 + Gold/Gems x2(100%)'
  },
  {
    id: '19',
    src: 'images/curios/ruins/locked-sarcophagus.png',
    provsrc: 'images/provisions/shovel-key.png',
    message: 'Key: Gold/Heirlooms x2 + Gold/Gems x1(100%). Shovel: Gold/Heirlooms x1 + Gold/Gems x1(100%)'
  },
  {
    id: '20',
    src: 'images/curios/ruins/sarcophagus.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Gold/Heirlooms x2(60%), Negative Quirk: Thanatophobia(20%), Nothing(20%)'
  },
  {
    id: '21',
    src: 'images/curios/ruins/suit-of-armor.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Buff PROT/DODGE +10 Until Camp(75%), Positive Quirk: Ruins Adventurer(12.5%), Positive Quirk: Ruins Tactician(12.5%)'
  },
  {
    id: '22',
    src: 'images/curios/warrens/bone-altar.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Buff +15% DMG, +10 ACC, +5% CRT Until Camp, Cure Status Effects(100%)'
  },
  {
    id: '23',
    src: 'images/curios/warrens/dinner-cart.png',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Food x3 + Gold/Trinket x1(100%)'
  },
  {
    id: '24',
    src: 'images/curios/warrens/makeshift-dining-table.png',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Food x2 + Gold/Supplies x1(100%)'
  },
  {
    id: '25',
    src: 'images/curios/warrens/moonshine-barrel.png',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Buff +30% DMG until camp(100%)'
  },
  {
    id: '26',
    src: 'images/curios/warrens/occult-scrawlings.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Random Positive Quirk(33.3%), Stress +25(25%), Nothing(25%), Random Negative Quirk(16.7%)'
  },
  {
    id: '27',
    src: 'images/curios/warrens/pile-of-bones.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Any Loot x2(100%)'
  },
  {
    id: '28',
    src: 'images/curios/warrens/pile-of-scrolls.png',
    provsrc: 'images/provisions/torch.png',
    message: 'Purge Negative Quirk(100%)'
  },
  {
    id: '29',
    src: 'images/curios/warrens/rack-of-blades.png',
    provsrc: 'images/provisions/bandage.png',
    message: 'Gold/Gems x2 + Food x1(100%)'
  },
  {
    id: '30',
    src: 'images/curios/warrens/sacrificial-stone.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Stress +50(50%), Purge Negative Quirk(25%), Positive Quirk: Warrens Explorer(12.5%), Postive Quirk: Warrens Scrounger(12.5%)'
  },
  {
    id: '31',
    src: 'images/curios/weald/ancient-coffin.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Gold/Heirlooms x2(50%), Nothing(33.3%), Positive Quirk: Weald Adventurer(8.3%), Positive Quirk: Weald Explorer(8.3%)'
  },
  {
    id: '32',
    src: 'images/curios/weald/beast-carcass.png',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Food x2(100%)'
  },
  {
    id: '33',
    src: 'images/curios/weald/eerie-spiderweb.png',
    provsrc: 'images/provisions/bandage.png',
    message: 'Gold/Gems x2 + Gems/Trinket x1(100%)'
  },
  {
    id: '34',
    src: 'images/curios/weald/left-luggage.png',
    provsrc: 'images/provisions/antivenom-key.png',
    message: 'Any Loot x3(100%). Without cleansing: Any Loot x4 + Jouranl Entry(50%), Blight(50%)'
  },
  {
    id: '35',
    src: 'images/curios/weald/mummified-remains.png',
    provsrc: 'images/provisions/bandage.png',
    message: 'Gold/Trinkets x2(100%)'
  },
  {
    id: '36',
    src: 'images/curios/weald/old-tree.png',
    provsrc: 'images/provisions/antivenom.png',
    message: 'Any Loot x3(100%). Without cleansing: Any Loot x2(50%), Blight/Nothing(25%)'
  },
  {
    id: '37',
    src: 'images/curios/weald/pristine-fountain.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Stress Heal 30(100%). Without cleansing: Stress Heal 20(100%)'
  },
  {
    id: '38',
    src: 'images/curios/weald/shallow-grave.png',
    provsrc: 'images/provisions/shovel.png',
    message: 'Gems/Heirlooms x3(100%)'
  },
  {
    id: '39',
    src: 'images/curios/weald/travellers-tent.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Scouting(37.5%), Gold/Supplies x4 + Gold/Heirlooms x4 + Journal Entry(37.5%), Stress +25(12.5%), Nothing(12.5%)'
  },
  {
    id: '40',
    src: 'images/curios/weald/troubling-effigy.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Random Positive Quirk(100%)'
  },
  {
    id: '41',
    src: 'images/curios/cove/barnacle-crusted-chest.png',
    provsrc: 'images/provisions/shovel.png',
    message: 'Any Loot x3(100%). Without cleansing: Any Loot x2(50%), Bleed(25%), Nothing(25%)'
  },
  {
    id: '42',
    src: 'images/curios/cove/bas-relief.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Positive Quirk(66.7%), Negative Quirk(22.2%), Disease(11.1%)'
  },
  {
    id: '43',
    src: 'images/curios/cove/brackish-tidepool.png',
    provsrc: 'images/provisions/antivenom.png',
    message: 'Heal 5 HP and Cure(50%), Stress Heal 5(50%)'
  },
  {
    id: '44',
    src: 'images/curios/cove/eerie-coral.png',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Purge Negative Quirk(100%)'
  },
  {
    id: '45',
    src: 'images/curios/cove/fish-idol.png',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Buff +18% DMG until Camp(50%), Buff 10% DMG, 5 ACC until Camp(50%)'
  },
  {
    id: '46',
    src: 'images/curios/cove/giant-fish-carcass.png',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Gems/Trinkets x2 + Gem/Gold x1 + Supplies x2(100%)'
  },
  {
    id: '47',
    src: 'images/curios/cove/giant-oyster.png',
    provsrc: 'images/provisions/shovel.png',
    message: 'Gold/Trinkets x3(100%)'
  },
  {
    id: '48',
    src: 'images/curios/cove/ships-figurehead.png',
    provsrc: 'images/provisions/no-action.png',
    message: 'Stress Heal 25(66.7%), Buff +20% DMG, +4 SPD Until Camp(33.3%)'
  },
  {
    id: '49',
    src: 'images/curios/courtyard/bloodflowers.jpg',
    provsrc: 'images/provisions/shovel.png',
    message: 'Gems/Heirlooms x2(66.7%), Any Loot x1(33.3%)'
  },
  {
    id: '50',
    src: 'images/curios/courtyard/damned-fountain.jpg',
    provsrc: 'images/provisions/holy-water.png',
    message: 'Stress Heal 30(100%)'
  },
  {
    id: '51',
    src: 'images/curios/courtyard/disturbing-diversion.jpg',
    provsrc: 'images/provisions/shovel.png',
    message: 'Heirlooms x3(100%)'
  },
  {
    id: '52',
    src: 'images/curios/courtyard/forgotten-delicacies.jpg',
    provsrc: 'images/provisions/medicinal-herbs.png',
    message: 'Food x2 + Gold/Supplies x1(100%)'
  },
  {
    id: '53',
    src: 'images/curios/courtyard/hooded-shrew.png',
    provsrc: 'images/provisions/the-blood.png',
    message: 'Any Loot x2(100%)'
  },
  {
    id: '54',
    src: 'images/curios/courtyard/pile-of-strange-bones.jpg',
    provsrc: 'images/provisions/bandage.png',
    message: 'Any Loot x1(50%), The Blood(50%)'
  },
  {
    id: '55',
    src: 'images/curios/courtyard/throbbing-coccoons.jpg',
    provsrc: 'images/provisions/torch.png',
    message: 'Stress Heal 30(100%)'
  },
  {
    id: '56',
    src: 'images/curios/courtyard/thronging-hive.jpg',
    provsrc: 'images/provisions/torch.png',
    message: 'Any Loot x3(100%). Without cleansing: Any Loot x2(75%), Bleed(25%)'
  },
  {
    id: '57',
    src: 'images/curios/courtyard/wine-crate.jpg',
    provsrc: 'images/provisions/antivenom-shovel.png',
    message: 'Antivenom: Stress Heal 30(100%). Shovel: Firewood(100%)'
  }
]

var provisions = [
  {
    id: '1',
    src: 'images/provisions/recommended/ruins-s.png'
  },
  {
    id: '2',
    src: 'images/provisions/recommended/ruins-m.png'
  },
  {
    id: '3',
    src: 'images/provisions/recommended/ruins-l.png'
  },
  {
    id: '4',
    src: 'images/provisions/recommended/warrens-s.png'
  },
  {
    id: '5',
    src: 'images/provisions/recommended/warrens-m.png'
  },
  {
    id: '6',
    src: 'images/provisions/recommended/warrens-l.png'
  },
  {
    id: '7',
    src: 'images/provisions/recommended/weald-s.png'
  },
  {
    id: '8',
    src: 'images/provisions/recommended/weald-m.png'
  },
  {
    id: '9',
    src: 'images/provisions/recommended/weald-l.png'
  },
  {
    id: '10',
    src: 'images/provisions/recommended/cove-s.png'
  },
  {
    id: '11',
    src: 'images/provisions/recommended/cove-m.png'
  },
  {
    id: '12',
    src: 'images/provisions/recommended/cove-l.png'
  },
  {
    id: '13',
    src: 'images/provisions/recommended/courtyard-s.jpg'
  },
  {
    id: '14',
    src: 'images/provisions/recommended/courtyard-m.jpg'
  },
  {
    id: '15',
    src: 'images/provisions/recommended/courtyard-l.jpg'
  }
]
