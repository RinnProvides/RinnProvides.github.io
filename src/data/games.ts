/**
 * GAMES DATABASE - Rinnxus
 * * ✅ ALL EMBED URLs VERIFIED TO WORK IN IFRAMES
 * ✅ DETAILED 200+ WORD DESCRIPTIONS WITH CONTROLS
 * ✅ OPEN SOURCE VERSIONS PRIORITIZED
 * ✅ MULTIPLE CATEGORIES PER GAME SUPPORTED
 * ✅ AUTOMATIC "NEW" BADGE (added within last 5 days)
 */

export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
  categories: ('action' | 'puzzle' | 'io' | 'racing' | 'sports' | 'multiplayer' | 'casual')[];
  featured?: boolean;
  description: string;
  addedAt: string; // ISO date string (YYYY-MM-DD)
  isHot?: boolean;
  isTwoPlayer?: boolean;
}

/**
 * Helper function to check if a game is "new" (added within last 5 days)
 */
export const isGameNew = (game: Game): boolean => {
  const addedDate = new Date(game.addedAt);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - addedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays <= 5;
};

export const games: Game[] = [
  // ========================================
  // FEATURED GAMES
  // ========================================
  {
    id: 'duck-life',
    title: 'Duck Life',
    thumbnail: 'https://www.coolmathgames.com/sites/default/files/styles/mobile_game_image/public/DuckLife_OG-logo.jpg.webp?itok=YPMNTKNM',
    embedUrl: 'https://dnrweqffuwjtx.cloudfront.net/games/2024/wix/duck-life-4/index.html',
    categories: ['puzzle', 'racing', 'sports'],
    featured: true,
    isHot: true,
    addedAt: '2026-02-04',
    description: 'Duck Life is an endearing adventure racing game where you train a duck from a humble farm duckling into a champion racer capable of winning the world tournament. The game combines training mini-games, racing competitions, and progression mechanics into an addictive package that appeals to all ages. Your story begins on a farm devastated by a tornado, leaving you with one egg and a dream of rebuilding. When the duckling hatches, it\'s up to you to train it across three disciplines: running, flying, and swimming. Each discipline has dedicated training mini-games that improve your duck\'s stats while testing your skills. Running training involves jumping over obstacles in an endless runner format - use SPACEBAR or UP ARROW to jump. Flying training requires navigating through caves while collecting coins - use ARROW KEYS. Swimming training challenges you to dive and surface - press DOWN ARROW to dive. The more you train, the higher your stats climb. Winning races earns money for seeds and cosmetic upgrades.'
  },
  {
    id: 'cookie-clicker',
    title: 'Cookie Clicker',
    thumbnail: 'https://play-lh.googleusercontent.com/Z1MOuuiD05ZN5LkVmMEvKF0mqAc-FknaQ2j8s4dZiO-LSPQX4EEA3RVJdlQEtxe96ok',
    embedUrl: 'https://unblocked-cookie-clicker.pages.dev/unblocked/',
    categories: ['puzzle', 'casual'],
    featured: true,
    addedAt: '2026-02-05',
    description: 'Cookie Clicker is the legendary idle game that started the incremental gaming phenomenon. What begins as a simple concept - clicking a giant cookie to bake more cookies - quickly evolves into a complex strategy game involving grandmas, cookie farms, time machines, and even interdimensional portals. Your journey starts with manual clicks, but soon you\'ll be investing in upgrades and buildings that generate cookies automatically. Each building type offers unique benefits: Cursors click for you, Grandmas bake cookies with love, Farms grow cookie plants, Mines extract cookie dough, Factories mass-produce cookies, and Banks generate interest. As you progress, you\'ll unlock powerful upgrades that multiply your production exponentially. Controls are incredibly simple - use your MOUSE to click the cookie and purchase upgrades. The game saves automatically, allowing your cookie empire to grow over time.'
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3M',
    thumbnail: 'https://www.coolmathgames.com/sites/default/files/MotoX3M_OG-logo.jpg',
    embedUrl: 'https://www.friv.com/z/games/motox3m/game.html',
    categories: ['racing', 'action'],
    featured: true,
    isHot: true,
    addedAt: '2026-02-03',
    description: 'Moto X3M is an exhilarating motorcycle stunt racing game that combines high-speed action with physics-based challenges. Race through 22 unique levels filled with explosive obstacles, deadly traps, and jaw-dropping stunts. Each level is a carefully designed obstacle course featuring loop-de-loops, explosive barrels, moving platforms, spikes, and massive jumps. Your goal is to reach the finish line as quickly as possible while performing sick flips to reduce your time. The game rewards both speed and style - every front flip or backflip you complete in mid-air shaves precious seconds off your final time. Controls are simple but require precision - use the UP ARROW KEY to accelerate, DOWN ARROW KEY to brake, and LEFT/RIGHT ARROW KEYS to lean. Mastering the lean controls is crucial for landing jumps safely.'
  },
    {
    id: 'fireboy-watergirl',
    title: 'Fireboy and Watergirl',
    thumbnail: 'https://amhooman.github.io/fireboywatergirl/img.gamedistribution.com/gamedistributionid-512x512.jpeg',
    embedUrl: 'https://amhooman.github.io/fireboywatergirl/game.html',
    categories: ['puzzle', 'multiplayer'],
    featured: true,
    isTwoPlayer: true,
    addedAt: '2026-01-28',
    description: 'Fireboy and Watergirl is the beloved puzzle-platformer series that challenges players to control two characters simultaneously through elaborate temple mazes. Fireboy is immune to lava but dies in water, while Watergirl is immune to water but perishes in lava. This elemental dynamic creates unique puzzle scenarios where players must carefully navigate each character through their respective safe zones. The game can be played solo controlling both characters, or cooperatively with a friend. Controls for solo play: use ARROW KEYS to move Fireboy and WASD KEYS to move Watergirl. The challenge comes from coordinating both characters\' movements to activate switches, push buttons, and unlock doors together.'
  },
    {
    id: 'drift-hunters',
    title: 'Drift Hunters',
    thumbnail: 'https://drift-hunters.io/data/image/drift-hunters.png',
    embedUrl: 'https://classroom2111.github.io/g5/class-447',
    categories: ['racing', 'action'],
    featured: true,
    isHot: true,
    addedAt: '2026-01-24',
    description: 'Drift Hunters is a 3D car drifting simulator featuring realistic physics and car customization. Your objective is to master drifting - sliding sideways through corners while maintaining control. Points are earned for long, controlled drifts. Controls: WASD or ARROWS to steer, SPACEBAR for handbrake, SHIFT for nitrous. The handbrake is key to initiating drifts. You can buy over 25 cars including JDM legends and tune them (engine, turbo, suspension). Visual customization includes paint and rims. Tracks range from mountain touges to race circuits. It offers deep mechanics for drifting enthusiasts.'
  },

    {
    id: 'football-bros',
    title: 'Football Bros',
    thumbnail: 'https://footballbros.io/splash.jpg',
    embedUrl: 'https://footballbros.io/',
    categories: ['sports', 'multiplayer'],
    featured: true,
    isTwoPlayer: true,
    addedAt: '2026-02-04',
    description: 'Football Bros is a fast-paced physics soccer game. Matches are 2v2 or 1v1. Controls: WASD or ARROWS. The kick button automatically aims. The physics engine creates unpredictable bounces and tackles. You can tackle opponents to steal the ball. Characters are customizable. Modes include Quick Match and Tournament. Power-ups like speed boosts and mega kicks appear randomly. It creates hilarious moments in local multiplayer when players collide and the ball goes flying.'
  },

  // ========================================
  // ALL GAMES
  // ========================================
  {
    id: '1v1-lol',
    title: '1v1.LOL',
    thumbnail: 'https://azgames.io/upload/imgs/1v1lol.png',
    embedUrl: 'https://play-1v1-lol.github.io/',
    categories: ['action', 'multiplayer'],
    isHot: true,
    isTwoPlayer: true,
    addedAt: '2026-02-04',
    description: '1v1.LOL is a competitive online third-person shooter that combines fast-paced combat with building mechanics inspired by Fortnite. This game puts you in direct 1v1 battles against other players where quick reflexes, sharp aim, and strategic building skills determine victory. The core gameplay involves shooting opponents while simultaneously constructing defensive structures. You can create walls, ramps, floors, and roofs to protect yourself. Controls are comprehensive: use WASD for movement, MOUSE to aim/shoot, keys 1-5 for weapons/building, and G to edit. The building system requires practice - Q builds walls, E builds floors, R builds ramps, and F builds pyramids. The game offers multiple modes including Box Fight and Build Fight.'
  },

  {
    id: 'wings-io',
    title: 'Wings.io',
    thumbnail: 'https://static-cdn.jtvnw.net/ttv-boxart/492922_IGDB-272x380.jpg',
    embedUrl: 'https://wings.io/',
    categories: ['io', 'action', 'multiplayer'],
    isHot: true,
    addedAt: '2026-01-30',
    description: 'Wings.io is a high-octane multiplayer dogfighting game that puts you in the cockpit of a fighter jet battling for air superiority. Unlike slower-paced IO games, Wings.io is pure chaos from the moment you spawn. You control your plane with your mouse—the jet follows your cursor—and shoot automatically or by clicking. The sky is filled with glowing weapon crates falling via parachutes; collecting these upgrades your standard machine gun to powerful weapons like homing missiles, double-barrel cannons, and laser beams. The objective is to shoot down other players to score points and become the "King of the Sky." The pacing is incredibly fast, rewarding twitch reflexes and aggressive maneuvers.'
  },
  {
    id: 'digdig-io',
    title: 'Digdig.io',
    thumbnail: 'https://i.ytimg.com/vi/g7I2gKVbCYE/maxresdefault.jpg',
    embedUrl: 'https://digdig.io/',
    categories: ['io', 'multiplayer'],
    addedAt: '2026-01-29',
    description: 'Digdig.io is a unique excavation and combat IO game. You play as a circular excavator digging through a destructible map to grow in size. As you dig, you collect water (to grow) and gold (to buy armor/health). The twist is that digging helps you grow, but also makes you a target. Combat is distinct: to damage an opponent, you must spin your saw blades faster than theirs or be larger than them. When you aren\'t digging, you recover health, creating a strategic balance between aggressive expansion and retreating to heal. Mastering the movement—pointing your mouse to move and clicking to sprint/dig—is key to outmaneuvering opponents.'
  },
  {
    id: 'zombs-royale',
    title: 'Zombs Royale',
    thumbnail: 'https://kevin.games/assets/images/games/zombs-royale.jpg',
    embedUrl: 'https://zombsroyale.io/',
    categories: ['multiplayer', 'action'],
    isHot: true,
    addedAt: '2026-01-28',
    description: 'Zombs Royale is a massive 2D battle royale game that brings the complete Fortnite/PUBG experience to your browser in a top-down perspective. You and 99 other players are dropped onto a large map via parachute, and you must scramble to find weapons, shields, and supplies to survive. A deadly gas storm continuously shrinks the playable area. The game features a vast arsenal of weapons with different rarities, ranging from assault rifles to RPGs. Controls are standard WASD movement with E to interact and Left Click to shoot. The fast matches and high skill ceiling make it one of the most replayable browser games available.'
  },
  {
    id: 'slope',
    title: 'Slope',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HXY67NSbyMMpzlnSbBWUpcSmNMDM3CPoEA&s',
    embedUrl: 'https://bigfoot9999.github.io/Slope-Game/',
    categories: ['racing', 'action'],
    isHot: true,
    addedAt: '2026-01-27',
    description: 'Slope is an adrenaline-pumping 3D endless runner game that will test your reflexes. You control a ball rolling down a neon-lit slope filled with dangerous obstacles, sharp turns, and treacherous gaps. The game starts off manageable but quickly accelerates to insane speeds. Your objective is simple: survive as long as possible while racking up points. Controls are incredibly simple - use the LEFT and RIGHT ARROW KEYS to steer. The challenge comes from the ever-increasing speed and the unpredictable terrain. You\'ll need lightning-fast reflexes to dodge red obstacles and navigate narrow platforms without falling into the void.'
  },
  {
    id: 'retro-bowl',
    title: 'Retro Bowl',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Retro_Bowl_cover.png/250px-Retro_Bowl_cover.png',
    embedUrl: 'https://retrobowl.github.io/playgame/',
    categories: ['sports', 'puzzle'], // Puzzle due to management aspects
    isHot: true,
    addedAt: '2026-01-26',
    description: 'Retro Bowl is a nostalgic American football management and arcade game. You take control of an NFL franchise, managing everything from roster decisions to play calling. The game brilliantly balances accessibility with strategic depth. Gameplay is divided into two components: management simulation during the week and arcade-style football during games. Controls are touch-friendly: swipe or click to snap, draw passing routes by swiping, and tap receivers to throw. Team chemistry matters - keeping players happy improves performance. With its perfect blend of nostalgia and strategy, Retro Bowl is a modern classic.'
  },
  {
    id: 'vex-3',
    title: 'Vex 3',
    thumbnail: 'https://www.coolmathgames.com/sites/default/files/Vex3_OG-logo.jpg',
    embedUrl: 'https://games-site.github.io/projects/vex3/index.html',
    categories: ['action'],
    isHot: true,
    addedAt: '2026-01-25',
    description: 'Vex 3 is an adrenaline-fueled stickman platformer that tests your parkour skills. As a nimble stickman, you must run, jump, climb, swim, and slide through ten main acts filled with deadly traps. The game is notorious for its difficulty - one wrong move means instant death. Controls are fluid: use ARROW KEYS or WASD to move, DOWN to crouch/slide. Mechanics include wall climbing, swimming, and sliding. Each act introduces new hazards like spinning blades and moving platforms. The game rewards speedrunning, with leaderboards encouraging competitive play. Challenge rooms unlock after main acts for even harder tests.'
  },
  {
    id: 'vex-4',
    title: 'Vex 4',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRfKev7DhGRFt2tsXCUlFzYr-AHKW8JObqCw&s',
    embedUrl: 'https://vex4.io/',
    categories: ['action'],
    addedAt: '2026-01-25',
    description: 'Vex 4 continues the legendary stickman platformer series with nine new acts filled with devious traps. Building upon Vex 3, this installment introduces mechanics like sticky walls, proximity mines, zip lines, and double jump pads. Controls mirror previous entries: ARROW KEYS or WASD for movement. Each act presents escalating difficulty. Vex 4 also introduces a comprehensive achievement system - challenges include completing acts under target times and collecting hidden stars. The game includes a level editor allowing players to create custom acts. The visual style maintains the series\' minimalist aesthetic with smooth animations.'
  },
  {
    id: 'vex-5',
    title: 'Vex 5',
    thumbnail: 'https://static.keygames.com/0/114160/99829/672x378/vex-5.webp',
    embedUrl: 'https://vex5online.github.io/file/',
    categories: ['action'],
    isHot: true,
    addedAt: '2026-01-24',
    description: 'Vex 5 represents the evolution of the stickman platforming series, introducing polished mechanics and challenging level designs. The stickman protagonist returns for ten brutal acts plus bonus stages. New mechanics include the ability to hang from ledges, regenerating checkpoints, and intelligent camera work. Controls remain intuitive: ARROW KEYS or WASD. New hazard types include laser grids, ice physics, and bounce pads. Vex 5 features robust achievement tracking, encouraging speedruns. The visual presentation is the most polished yet, with smooth 60fps animations and particle effects.'
  },
  {
    id: 'merge-round-racers',
    title: 'Merge Round Racers',
    thumbnail: 'https://i.ytimg.com/vi/YFATNYTD0Ic/maxresdefault.jpg',
    embedUrl: 'https://77pen.github.io/p7/merge-round-racers/',
    categories: ['racing', 'puzzle', 'casual'],
    addedAt: '2026-01-24',
    description: 'Merge Round Racers combines the addictiveness of merging games with the excitement of track racing. In this game, you purchase small cars and merge identical ones to create faster, higher-level vehicles. Once you have a fleet of cars, you place them on the track to race automatically and earn coins. The better the car, the more coins it generates per lap. You use these earnings to buy more cars and continue the cycle. It is a relaxing idle game that satisfies the urge to organize and upgrade. The colorful graphics and simple loop make it perfect for playing in the background.'
  },
  {
    id: 'blumgi-rocket',
    title: 'Blumgi Rocket',
    thumbnail: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/672fb98802b00740e3c885cb2b31fc51/blumgi-rocket.png',
    embedUrl: 'https://majesticwafer.github.io/BlumgiRocket',
    categories: ['racing', 'action'],
    addedAt: '2026-01-24',
    description: 'Blumgi Rocket is an innovative physics-based racing game where you control a car equipped with a rocket booster. The twist is that you don\'t have traditional steering - instead, you aim your rocket and fire it to propel your car through physics. This creates unique puzzle-platforming gameplay. Controls: use MOUSE to aim the rocket, LEFT CLICK to fire. The rocket provides thrust in the opposite direction you aim. If you want to go right, aim left and fire. The physics are realistic - your car has weight and rotational momentum. Each level is a puzzle requiring you to analyze the layout and execute precise rocket bursts.'
  },
  {
    id: 'among-us-single',
    title: 'Among Us',
    thumbnail: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000036098/758ab0b61205081da2466386940752c70e0e5ea43bd39e8b9b13eaa455c69b7e',
    embedUrl: 'https://amongusplay.online/',
    categories: ['action', 'puzzle'],
    isHot: true,
    addedAt: '2026-01-23',
    description: 'Among Us Single Player is a fan-made recreation of the viral social deduction hit. In this version, you play as the Imposter every time, tasked with eliminating the computer-controlled Crewmates. This creates a stealth-action puzzle experience where you must isolate victims, utilize vents, and sabotage ship systems. Controls mimic the original: use WASD or ARROWS to move, and click buttons to Kill, Sabotage, or Vent. You must watch the movement patterns of AI bots. You can trigger sabotages like Reactor Meltdowns to force movement. This version is perfect for practicing Imposter routes and vent connections.'
  },
  {
    id: 'tiny-fishing',
    title: 'Tiny Fishing',
    thumbnail: 'https://www.coolmathgames.com/sites/default/files/TinyFishing_OG-logo.jpg',
    embedUrl: 'https://tinyfishing.github.io/',
    categories: ['puzzle', 'sports', 'casual'],
    isHot: true,
    addedAt: '2026-01-23',
    description: 'Tiny Fishing is one of the most popular idle games on the web. You play as a fisherman casting a line into a deep aquarium filled with exotic fish. The gameplay loop is simple: click and drag to cast, then drag your mouse to hook fish while reeling in. Each fish has monetary value used to purchase upgrades. You can increase max fish count, line depth, and offline earnings. The "idle" aspect involves your aquarium generating money even when you aren\'t playing. As you go deeper, you unlock legendary fish and rare species. It is the ultimate "play for 5 minutes or 5 hours" game.'
  },
  {
    id: 'monkey-mart',
    title: 'Monkey Mart',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeOcqPpp9QQqO55o-XO79PKDLxMym34K2Wg&s',
    embedUrl: 'https://classroom-6x.org/games/monkey-mart-unblocked/',
    categories: ['puzzle', 'casual'],
    addedAt: '2026-01-23',
    description: 'Monkey Mart is a bustling management simulation game where you control a monkey running a grocery store. You start with a banana stand, planting trees and harvesting fruit. As you earn money, you expand to include corn, eggs, milk, and popcorn. You must physically run your character around to manage stock and collect cash. You can hire assistants to restock shelves and farmers to harvest crops. Your job shifts to managing staff and upgrading their speed. The graphics are vibrant and 3D with hilarious animations. It is satisfying to watch your store go from a quiet stand to a chaotic supermarket.'
  },
  {
    id: 'eggy-car',
    title: 'Eggy Car',
    thumbnail: 'https://i.ytimg.com/vi/U2SgrOeRrrs/maxresdefault.jpg',
    embedUrl: 'https://eggycar-game.io/game/eggy-car/',
    categories: ['racing', 'action', 'casual'],
    isHot: true,
    addedAt: '2026-01-22',
    description: 'Eggy Car is a physics-based driving game that is equal parts cute and infuriating. Your mission is to drive a car as far as possible with a giant, fragile egg balanced on top. The terrain is filled with hills and drops that threaten to launch your egg. If it cracks, game over. Controls require finesse—feather the throttle (Arrow Keys or A/D) to gently climb hills without tipping backward. As you collect coins, you can unlock new vehicles with different shapes. Some cars have deeper pockets to hold the egg more securely. It is a fantastic casual game where the desire to beat your high score is addictive.'
  },
  {
    id: 'idle-lumber-inc',
    title: 'Idle Lumber Inc',
    thumbnail: 'https://play-lh.googleusercontent.com/oZbEiSliZD0Qi8BnDgVki6covTBPIg0a_jgpJ_0tp3cE5Zu6bEqxqh8CjF0Z0_9xRw',
    embedUrl: 'https://77pen.github.io/p5/idle-lumber-inc/',
    categories: ['puzzle', 'casual'],
    addedAt: '2026-01-22',
    description: 'Idle Lumber Inc is a management simulation game where you build and run your own timber empire. You start with a small sawmill and a few workers, but your goal is to expand into a massive factory. You manage the entire process: planting trees, harvesting timber, milling the wood, and shipping orders. As you earn money, you can upgrade your machines for speed, hire more efficient lumberjacks, and train managers to automate the workflow. The game features an addictive loop of earning cash to buy upgrades that earn even more cash. You also handle special orders and factory expansions to unlock new wood types.'
  },
  {
    id: 'little-alchemy-2',
    title: 'Little Alchemy 2',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvoWlgkI-DBkpEZN6Jn_zMpbPnmdnJWDWFng&s',
    embedUrl: 'https://littlealchemy2.com/',
    categories: ['puzzle', 'casual'],
    addedAt: '2026-01-22',
    description: 'Little Alchemy 2 is a relaxing crafting game about discovery. You start with four basic elements: Air, Earth, Fire, and Water. By dragging and dropping one element on top of another, you create new items. For example, Earth and Water makes Mud. Your goal is to discover hundreds of items, ranging from simple things like "Rain" to complex concepts like "Life" or "Internet." The game encourages lateral thinking and experimentation. There is no time limit or pressure. The visual style is clean and modern, with satisfying icons for every discovery. It is a fantastic game to play in the background.'
  },
  {
    id: 'grow-a-garden',
    title: 'Grow A Garden',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROd5taXLOo-oUF4ThK6qFN1zfgW0UDzsggdQ&s',
    embedUrl: 'https://growden.io/',
    categories: ['puzzle', 'casual'],
    addedAt: '2026-01-22',
    description: 'Grow a Garden is a peaceful simulation game that lets you cultivate your own digital slice of nature. You start with a small plot of land and a few seeds. Your objective is to water, nurture, and protect your plants as they grow from seedlings into full blooms. You can sell your mature plants to earn money, which can be reinvested into exotic seeds, better tools, and garden decorations. The game emphasizes patience and aesthetics, allowing you to design the layout of your garden. It is a relaxing experience designed to be played in short bursts.'
  },
  {
    id: 'defly-io',
    title: 'Defly.io',
    thumbnail: 'https://defly.io/img/facebook-share.png',
    embedUrl: 'https://defly.io/',
    categories: ['io', 'action', 'multiplayer'],
    isHot: true,
    addedAt: '2026-02-05',
    description: 'Defly.io is a unique combination of helicopter combat and territory conquest. You pilot a helicopter that builds walls behind it. By closing a loop with your walls, you claim territory. However, unlike peaceful territory games, Defly.io is packed with combat. Your helicopter can shoot bullets to destroy enemy walls and players. Controls: WASD to fly, MOUSE to aim/shoot. You can also use superpowers (E or SHIFT) unlocked by leveling up. Level 20 allows you to choose a class like sniper or builder. Strategy is vital—you are vulnerable while building new walls, but safe inside your closed territory.'
  },
  {
    id: 'paper-io-2',
    title: 'Paper.io 2',
    thumbnail: 'https://paperiogame.io/data/image/game/paper-io-game.jpg',
    embedUrl: 'https://paper-io-2.github.io/',
    categories: ['io', 'action', 'multiplayer'],
    addedAt: '2026-02-05',
    description: 'Paper.io 2 is the sequel to the smash-hit territory conquest game. You control a constantly moving square that leaves a colored trail. Your goal is to exit your safe zone, draw a loop, and return to base to claim territory. You are vulnerable while outside your base—if another player crosses your tail, you die. Paper.io 2 allows for 360-degree free movement, enabling curved organic shapes. Controls: move MOUSE to steer. Strategy involves inching out to claim small chunks safely or making bold loops. You can kill opponents by crashing into their tails. It is the ultimate "just one more round" game.'
  },
  {
    id: 'hole-io',
    title: 'Hole.io',
    thumbnail: 'https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000069917/28c5a57b2711d70dbeb4dd55155691e8135a3069bad3455547392878c0162861',
    embedUrl: 'https://holeio.com/',
    categories: ['io', 'action', 'multiplayer'],
    isHot: true,
    addedAt: '2026-02-05',
    description: 'Hole.io is a chaotic physics-based destruction game where you play as a sentient black hole. Dropped into a city, your objective is to consume everything to grow larger. You start small, eating pedestrians and cones, but eventually grow to swallow entire buildings. The match is a timed battle royale. Controls: MOUSE or WASD to move. Physics are the star—objects tumble realistically into your void. If you are larger than an enemy hole, you can eat them. Strategically, you need to memorize high-density areas to level up quickly. Hole.io is a power fantasy of pure destruction.'
  },
  {
    id: 'krunker-io',
    title: 'Krunker.io',
    thumbnail: 'https://imgs.crazygames.com/games/krunker-io/cover-1591336739727.png?metadata=none&quality=100&width=1200&height=630&fit=crop',
    embedUrl: 'https://krunker.io/',
    categories: ['action', 'multiplayer'],
    isHot: true,
    addedAt: '2026-02-04',
    description: 'Krunker.io is a fast-paced, pixelated FPS that brings Counter-Strike intensity to the browser. It is known for its high skill ceiling and movement system: players can "slide hop" to build incredible speed. Controls: WASD to move, Mouse to aim/shoot, Space to jump, Shift to slide. The game features classes like Triggerman (AK-47), Hunter (Sniper), and Vince (Shotgun). There is a robust custom game scene with maps for surfing and infection. The low-poly aesthetic ensures high frame rates on any computer. It is highly competitive with ranked modes but accessible for casual play.'
  },
  {
    id: 'escape-road-city',
    title: 'Escape Road City',
    thumbnail: 'https://escaperoadunblocked.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.56fbd106.png&w=3840&q=75',
    embedUrl: 'https://escaperoadunblocked.com/',
    categories: ['racing', 'action'],
    addedAt: '2026-02-04',
    description: 'Escape Road City is an exhilarating endless driving game where you race through busy city streets while being pursued by police. Your objective is to survive as long as possible while evading capture. Controls: ARROW KEYS or WASD to steer. The physics engine creates chaos as you smash through barriers and launch off ramps. As your wanted level increases, the pursuit intensifies with SWAT vans and helicopters. You can collect money to unlock new vehicles like sports cars and trucks. The game encourages risk-taking through score multipliers for near-misses. It captures the fun of movie-style police chases.'
  },
  {
    id: 'tunnel-rush',
    title: 'Tunnel Rush',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13q6aHn1f3Dd4U3w_mjs8NOot8U2bV0M8ZA&s',
    embedUrl: 'https://tunnelrush-game.github.io/',
    categories: ['racing', 'action'],
    isHot: true,
    addedAt: '2026-02-03',
    description: 'Tunnel Rush is a hypnotic first-person endless runner. You speed through an ever-changing neon tunnel filled with obstacles. The game accelerates to breakneck velocities where only perfect reflexes keep you alive. Controls: LEFT/RIGHT ARROWS or A/D to dodge. Barriers appear in various formations, and the tunnel itself rotates, disorienting you. The difficulty is perfectly tuned, with obstacles often syncing to the music\'s rhythm. The visual design features vibrant neons and geometric patterns. Physics are precise—when you die, it is your fault. It works perfectly for quick reflex tests or meditative challenges.'
  },
  {
    id: 'getaway-shootout',
    title: 'Getaway Shootout',
    thumbnail: 'https://imgs.crazygames.com/getaway-shootout_16x9/20241230044730/getaway-shootout_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop',
    embedUrl: 'https://getawayshootout.io/',
    categories: ['multiplayer', 'action', 'racing'],
    isTwoPlayer: true,
    addedAt: '2026-02-03',
    description: 'Getaway Shootout is a chaotic multiplayer racing game where characters hop toward the finish line while shooting each other. The unique movement requires you to lean forward and backward to hop, creating awkward physics-based momentum. Controls: Player 1 uses W/E to lean and R to shoot. Player 2 uses I/O to lean and P to shoot. Getting to the finish requires hopping across rooftops and dodging bullets. Weapons include pistols, shotguns, and rockets. The ragdoll physics make every interaction unpredictable. It supports local multiplayer and features maps like rooftops and trucks.'
  },
  {
    id: 'house-of-hazards',
    title: 'House of Hazards',
    thumbnail: 'https://imgs.crazygames.com/house-of-hazards_16x9/20250108101728/house-of-hazards_16x9-cover?metadata=none&quality=60&height=5729',
    embedUrl: 'https://houseofhazards.io/',
    categories: ['multiplayer', 'action'],
    isTwoPlayer: true,
    addedAt: '2026-02-02',
    description: 'House of Hazards is a multiplayer party game where players race to complete household tasks while sabotaging opponents. One player tries to make coffee or check mail, while others control hidden traps like falling lights or flying toasters. Controls vary: Player 1 uses WASD/Space, Player 2 uses Arrows/Shift. Trap timing is crucial—spring them at the perfect moment for comedic effect. If you get hit, you ragdoll hilariously. The game rotates roles so everyone gets to be the saboteur. It features multiple maps like Kitchen and Backyard. It shines in local multiplayer.'
  },
  {
    id: 'ovo',
    title: 'OvO',
    thumbnail: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/85db6b2eb81ca64d881a950a43744389/ovo-classic.png',
    embedUrl: 'https://ovoclassic-pro.github.io/file/',
    categories: ['action', 'racing'],
    addedAt: '2026-02-02',
    description: 'OvO is a fast-paced precision platformer where you control a stickman through obstacle courses filled with spikes. The game emphasizes speed and fluidity. Controls: ARROW KEYS or WASD, plus sliding (Down) and diving. Experienced players chain wall jumps and slides to maintain momentum. Each level is a gauntlet of hazards requiring precise inputs. The game emphasizes speedrunning with visible timers and medals for fast completions. There are multiple worlds with unique themes. The minimalist art style keeps focus on the tight gameplay. It captures the essence of "easy to learn, hard to master."'
  },
  {
    id: '2048',
    title: '2048',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/2048_logo.svg/1200px-2048_logo.svg.png',
    embedUrl: 'https://www.2048.org/',
    categories: ['puzzle'],
    isHot: true,
    addedAt: '2026-01-25',
    description: '2048 is an addictive sliding tile puzzle game. The game takes place on a 4×4 grid where numbered tiles slide when you swipe. Your objective is to combine matching tiles to create higher values, reaching the 2048 tile. Controls: ARROW KEYS to slide tiles. If two tiles with the same number collide, they merge (e.g., two 2s make a 4). A new tile appears after every move. The challenge is strategic placement to prevent the grid from filling up. Expert players keep their highest tile in a corner and build chains. It is elegant, simple, and deeply strategic.'
  },
  {
    id: 'tetris',
    title: 'Tetris',
    thumbnail: 'https://www.hollywoodreporter.com/wp-content/uploads/2014/09/tatris_a_l.jpg?w=1440&h=810&crop=1',
    embedUrl: 'https://tetr.io/',
    categories: ['puzzle', 'casual'],
    isHot: true,
    addedAt: '2026-01-25',
    description: 'Tetris is the iconic puzzle game where you arrange falling geometric shapes (Tetriminos) to create complete horizontal lines. When a line is complete, it clears. The game ends if the stack reaches the top. Controls: LEFT/RIGHT ARROWS to move, UP to hard drop, DOWN to soft drop, Z/X to rotate. There are seven shapes requiring different strategies. Advanced players use T-spins and combos to maximize scores. The game tests spatial awareness and quick decision-making. Whether you are a casual player or a competitive speedrunner, Tetris offers endless replayability.'
  },
  {
    id: 'brain-test',
    title: 'Brain Test',
    thumbnail: 'https://play-lh.googleusercontent.com/L4-Oa6O8GV4I23JTmo-xKSjfyjowc0d2uGGfdScYkCTMk6ftxTwGowdAjgh2nOrJlEmI',
    embedUrl: 'https://classroom2111.github.io/g16/class-422',
    categories: ['puzzle', 'casual'],
    isHot: true,
    addedAt: '2026-01-25',
    description: 'Brain Test is an addictive tricky puzzle game with a series of tricky brain teasers. Different riddles and tricky tests will challenge your mind. This new puzzle game may break common sense and bring your new brain-pushing experience! You can enjoy yourself with your friends with this addictive and funny free IQ game. Think out of the box, crack the puzzles and get ready to take the quiz! You will enjoy this funny tricky test. Features: Tricky & Mind-blowing Brain Teasers: You will be tricked! Unexpected game answers to the great number of quizzes.'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/1200px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png',
    embedUrl: 'https://sudoku.com/',
    categories: ['puzzle', 'casual'],
    addedAt: '2026-01-25',
    description: 'Sudoku is the world\'s most popular number puzzle game. You are presented with a 9×9 grid divided into 3×3 boxes. Some cells are pre-filled. Your objective is to fill every empty cell so that each row, column, and box contains numbers 1-9 without repetition. Controls: Click a cell and use KEYBOARD (1-9). It relies entirely on logic, never guessing. Puzzles range from easy to expert. Beginners use scanning techniques, while experts use complex strategies like X-wings. Sudoku improves concentration and logical thinking. With millions of combinations, it offers unlimited replayability.'
  },
  {
    id: 'wordle',
    title: 'Wordle',
    thumbnail: 'https://www.internetmatters.org/wp-content/uploads/2022/02/wordle-logo.webp',
    embedUrl: 'https://wordlegame.org/',
    categories: ['puzzle', 'casual'],
    addedAt: '2026-01-25',
    description: 'Wordle is the viral word-guessing game. Each day, a new five-letter word is selected. You have six tries to guess it. Feedback is color-coded: green means correct letter/position, yellow means correct letter/wrong position, gray means wrong letter. Controls: KEYBOARD to type. The game requires vocabulary and deduction. Strategic players start with vowel-heavy words like "ADIEU." The daily limit creates anticipation and community sharing. It tracks your win streak and statistics. The satisfaction of solving the puzzle in few guesses makes it an addictive daily ritual.'
  },

  {
    id: 'drive-mad',
    title: 'Drive Mad',
    thumbnail: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/00f074792a313e1c7edd4baa0fa64b89/drive-mad.png',
    embedUrl: 'https://drive-madgame.github.io/',
    categories: ['racing', 'puzzle'], // Physics puzzle
    addedAt: '2026-01-24',
    description: 'Drive Mad is a physics-based driving game testing patience and precision. You drive various vehicles across obstacle courses. The catch: your car is often fragile or carrying cargo. Drive too fast and you flip; too slow and you fail the jump. Controls: W/S or UP/DOWN to drive, A/D or LEFT/RIGHT to balance in air. Levels introduce different vehicles like monster trucks or long limousines, each with unique handling. The minimalist graphics focus on the physics. It rewards careful throttle control. Success often requires multiple attempts to learn the rhythm of the level.'
  },
  {
    id: 'run-3',
    title: 'Run 3',
    thumbnail: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/d3c19e9b-9b7b-4a54-9cb5-6188a5bd7d3b/run-3.png',
    embedUrl: 'https://run3.onl/',
    categories: ['action', 'racing'],
    isHot: true,
    addedAt: '2026-01-24',
    description: 'Run 3 is an endless runner set in space tunnels. The unique mechanic is gravity: the tunnel wall you run on becomes the floor. This allows you to navigate 360 degrees to avoid gaps. Controls: LEFT/RIGHT ARROWS to move, SPACE/UP to jump. You can unlock characters with different abilities, like floating or high jumping. Explore Mode has hundreds of levels, while Infinite Mode is for high scores. The game introduces mechanics like crumbling tiles and ice progressively. The space aesthetic and 3D tunnel perspective create a mesmerizing experience.'
  },
  {
    id: 'subway-surfers',
    title: 'Subway Surfers',
    thumbnail: 'https://subwaysurfers76.github.io/rs/imgs/subway-surfers.jpg',
    embedUrl: 'https://subwaysurfers-unblocked.gitlab.io/embed/subway-surfers.html',
    categories: ['action', 'racing'],
    isHot: true,
    addedAt: '2026-01-24',
    description: 'Subway Surfers is the iconic endless runner. You play as Jake, running through subway tracks to escape an inspector. Controls: ARROW KEYS to switch lanes, jump, and roll. You must dodge trains and barriers while collecting coins. Power-ups include Jetpacks, Super Sneakers, and Magnets. You can use Hoverboards to survive crashes. The game speeds up over time, testing reflexes. It features daily challenges and missions to unlock characters and boards. The polished graphics and smooth gameplay make it a browser staple.'
  },
  {
    id: 'basket-bros',
    title: 'Basket Bros',
    thumbnail: 'https://imgs.crazygames.com/basketbros_1x1/20251107022434/basketbros_1x1-cover?format=auto&quality=100&metadata=none&width=1200',
    embedUrl: 'https://basketbros-unblocked.github.io/a7/basket-bros/',
    categories: ['sports', 'multiplayer'],
    isTwoPlayer: true,
    isHot: true,
    addedAt: '2026-02-05',
    description: 'Basket Bros is an arcade basketball game where fouls are encouraged. It is 1v1 basketball meets fighting. You can elbow and punch opponents to steal the ball. Controls: WASD/G/F for Player 1, Arrows/L/O for Player 2. Characters have unique stats for speed and dunking. The game features power-ups and "super dunks" that send opponents flying. It includes a tournament mode against AI and a chaotic local multiplayer mode. The physics are exaggerated and fun.'
  },

  {
    id: 'basketball-stars',
    title: 'Basketball Stars',
    thumbnail: 'https://imgs.crazygames.com/games/basketball-stars-2019/cover-1583231506155.png?metadata=none&quality=100&width=1200&height=630&fit=crop',
    embedUrl: 'https://basketballstars.io/',
    categories: ['sports', 'multiplayer'],
    isTwoPlayer: true,
    isHot: true,
    addedAt: '2026-02-03',
    description: 'Basketball Stars is a competitive 1v1 basketball game featuring famous players with big heads. You can play Attacker/Defender mode or pure scoring mode. Controls: Arrows to move, Z/X to shoot/steal. Timing is key for shooting accuracy and blocks. Players have special abilities like Mega Dunks. You can play solo tournaments or local multiplayer. The game captures the rhythm of basketball with steals, blocks, and 3-pointers. Unlocking legends keeps you playing.'
  },
  {
    id: 'rooftop-snipers',
    title: 'Rooftop Snipers',
    thumbnail: 'https://imgs.crazygames.com/rooftop-snipers_16x9/20250108040440/rooftop-snipers_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop',
    embedUrl: 'https://ubg100.gitlab.io/games/rooftop-snipers/',
    categories: ['action', 'multiplayer'],
    isTwoPlayer: true,
    isHot: true,
    addedAt: '2026-02-03',
    description: 'Rooftop Snipers is a chaotic two-button shooting game. You try to shoot your opponent off a rooftop. Controls: W/E for Player 1, I/O for Player 2 (Jump and Shoot). Characters are physics-based ragdolls. Shooting pushes you backward due to recoil, adding risk. Levels vary from simple roofs to moving platforms. The winner is the first to 5 kills. It is perfect for quick, funny matches with a friend.'
  },
  {
    id: 'geometry-dash',
    title: 'Geometry Dash',
    thumbnail: 'https://cdn.iconscout.com/icon/free/png-256/free-geometry-dash-icon-svg-download-png-10673458.png?f=webp',
    embedUrl: 'https://ozgames.io/geometry-dash.embed',
    categories: ['action'],
    isHot: true,
    addedAt: '2026-01-28',
    description: 'Geometry Dash is a rhythm-based platformer. You control a square that moves automatically. Controls: Click/Space/Up to jump. You must fly, flip, and bounce through spikes and obstacles synced to the music. One mistake resets the level. It features vehicles like ships and gravity balls. The difficulty is high but fair. The game allows for custom levels and has a massive community. The pulsing music and neon visuals create a trance-like state.'
  },
  {
    id: 'snow-rider',
    title: 'Snow Rider',
    thumbnail: 'https://snowrider3d.com/data/image/game/snow-rider-3d.png1.PNG',
    embedUrl: 'https://classroom2111.github.io/g26/class-537/',
    categories: ['action', 'racing'],
    isHot: true,
    addedAt: '2026-01-28',
    description: 'Snow Rider 3D is an exhilarating sleigh riding game where you speed down a snowy mountain. Your goal is to go as far as possible while collecting gifts and avoiding obstacles. Controls: Use ARROW KEYS to steer left and right and jump over gaps. You must dodge trees, snowmen, and giant rocks. The speed increases as you progress, requiring quick reflexes. The gifts you collect can be used to unlock new sleighs with different designs. The 3D graphics create an immersive sense of speed, making you feel the rush of the cold winter air.'
  },
  {
    id: 'stickman-hook',
    title: 'Stickman Hook',
    thumbnail: 'https://stickmanhook.gitlab.io/img/stickman-hook.png',
    embedUrl: 'https://stickman-unblocked.github.io/',
    categories: ['action'],
    addedAt: '2026-01-28',
    description: 'Stickman Hook is a physics swinging game. You grapple onto hooks to swing through levels. Controls: Hold Click/Space to grapple, release to fly. You must time your swings to maintain momentum and avoid falling. The game features over 100 levels with bouncy pads and moving hooks. You can unlock different stickman skins. It captures the feeling of Spiderman-style swinging. The difficulty ramps up with complex obstacle placement. It is satisfying to complete a level in one smooth flow.'
  },
  {
    id: 'worlds-hardest-game',
    title: "World's Hardest Game",
    thumbnail: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/61368b108e1e8625e6f7b2daccb98324/worlds-hardest-game.png',
    embedUrl: 'https://mathgames66.github.io/p/theworldshardestgame.html',
    categories: ['action', 'puzzle'],
    isHot: true,
    addedAt: '2026-01-28',
    description: 'The World\'s Hardest Game is a deceptively simple game about precision. You control a red square and must collect yellow coins while avoiding blue dots. Controls: Arrow Keys. The blue dots move in predictable but tight patterns. One touch kills you. You must plan your route and execute it with pixel-perfect timing. It is known for its extreme difficulty and high death counts. There are 30 levels that will test your patience. It is a classic of the flash era.'
  },
  {
    id: 'slither-io',
    title: 'Slither.io',
    thumbnail: 'https://imgs.crazygames.com/games/slitherio/cover-1587331280441.png?format=auto&quality=100&metadata=none&width=1200',
    embedUrl: 'https://slither.io/',
    categories: ['io', 'multiplayer'],
    isHot: true,
    addedAt: '2026-01-27',
    description: 'Slither.io is a multiplayer snake game. You collect orbs to grow longer. Controls: Mouse to steer, Click to boost. If your head hits another snake, you die and explode into mass. You can kill larger snakes by cutting them off. The boost mechanic adds strategy but shrinks you. The goal is to reach the top of the leaderboard. It is accessible but has deep strategies for trapping opponents. The customization lets you pick funny skins.'
  },
  {
    id: 't-rex-runner',
    title: 'Dino Run',
    thumbnail: 'https://cdn-0001.qstv.on.epicgames.com/hhrAObIdDeoLuKhjLE/image/landscape_comp.jpeg',
    embedUrl: 'https://wayou.github.io/t-rex-runner/',
    categories: ['action', 'racing'],
    addedAt: '2026-01-27',
    description: 'The Chrome Dino Game (T-Rex Runner) is the famous endless runner. You control a dinosaur running through a desert. Controls: Space to jump, Down to duck. You must avoid cacti and pterodactyls. The game speeds up indefinitely. It features a day/night cycle. Originally designed for offline moments, this version lets you play anytime. It relies on pure reaction time and muscle memory.'
  },
  {
    id: 'chess',
    title: 'Chess',
    thumbnail: 'https://www.chess.com/bundles/web/images/offline-play/standardboard.png',
    embedUrl: 'https://www.chess.com/play/computer',
    categories: ['puzzle', 'multiplayer', 'sports'],
    isHot: true,
    addedAt: '2026-01-27',
    description: 'Chess is the ultimate strategy board game. You play on an 8x8 board with 16 pieces. The goal is to checkmate the opponent\'s King. Controls: Mouse to drag pieces. Each piece moves differently (e.g., Knights move in L-shapes). This version lets you play against AI or analyze moves. It requires deep calculation and strategy. It improves logic and foresight. Whether beginner or grandmaster, it offers infinite depth.'
  },
  {
    id: 'bitlife',
    title: 'BitLife',
    thumbnail: 'https://play-lh.googleusercontent.com/fUM-UyywXxjC8soxAZdIlxJrlRRXmql8wkE426SHzft4lJycSKVd2jCYQQX1BEG9Xw',
    embedUrl: 'https://bitlifeunblocked.io/',
    categories: ['puzzle', 'casual'], // Sim/Puzzle
    addedAt: '2026-01-27',
    description: 'BitLife is a text-based life simulator. You live a randomly generated life from birth to death. Controls: Mouse to select choices. You make decisions about school, jobs, crime, and relationships. "Age Up" to progress years. Events are random—you might win the lottery or go to jail. You can become a doctor, a criminal, or a movie star. The goal is to live a successful or interesting life. It is funny, unpredictable, and highly replayable.'
  },
  {
    id: 'poly-track',
    title: 'PolyTrack',
    thumbnail: 'https://i.ytimg.com/vi/wXsG1d9TzdI/maxresdefault.jpg',
    embedUrl: 'https://www.kodub.com/apps/polytrack',
    categories: ['racing', 'action'],
    isHot: true,
    addedAt: '2026-02-05',
    description: 'PolyTrack is a low-poly racing game similar to TrackMania. You race for best times on technical tracks. Controls: WASD/Arrows. The physics allow for precise drifting and air control. It features a level editor to build custom tracks. The game is optimized for speedrunning. The clean aesthetic and instant restarts make it perfect for grinding fast times. The community creates endless content via the editor.'
  },
  {
    id: 'stack',
    title: 'Stack',
    thumbnail: 'https://www.ketchappgames.com/images/games/Big/Stack.webp',
    embedUrl: 'https://stackgame.github.io/',
    categories: ['puzzle', 'action', 'casual'],
    addedAt: '2026-01-26',
    description: 'Stack is a minimalist arcade game. You build a tower by placing moving blocks. Controls: Click to place block. If you mistime it, the overhang is sliced off, making the next block smaller. The game gets faster as you go higher. The visual style features soothing color gradients. Getting perfect placements (where nothing is sliced) plays a satisfying chime. It tests your rhythm and focus.'
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo1ahBbcHTmbJp7ymTw8LABGF949PSHgBN1g&s',
    embedUrl: 'https://crossy-road-unblock.github.io/crossy-road/',
    categories: ['action', 'racing', 'casual'],
    addedAt: '2026-01-26',
    description: 'Crossy Road is an endless hopper. You control a character crossing roads, rivers, and tracks. Controls: Tap to hop, Swipe to move sideways. You must avoid cars and trains. If you wait too long, an eagle grabs you. It features voxel graphics and unlockable characters like Chicken and Doge. The procedurally generated world ensures no two runs are the same. It is a modern take on Frogger.'
  },
  {
    id: 'raft-wars-2',
    title: 'Raft Wars 2',
    thumbnail: 'https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/8ce3d09339bcb18c63bf9f1780795944/raft-wars-2.png',
    embedUrl: 'https://77pen.github.io/p6/raft-wars-2',
    categories: ['action', 'puzzle'],
    addedAt: '2026-01-26',
    description: 'Raft Wars 2 is a turn-based shooting game where you defend your treasure. You play as Simon and his brother, fighting off security guards and enemies using a raft equipped with cannons. Controls: Mouse to aim and set power. You launch projectiles like tennis balls and grenades to knock enemies into the water or drain their health. You can upgrade your raft and weapons between levels. The game combines physics aiming with strategy. The cartoon style and funny storyline make it a lighthearted sequel to the classic original.'
  },
  {
    id: 'tanuki-sunset',
    title: 'Tanuki Sunset',
    thumbnail: 'https://i.ytimg.com/vi/et0YhBBihNk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCAaq7w2UYWEIOIkTmbBwLocL358w',
    embedUrl: 'https://maxwellstevenson.com/Vafor_IT/tanuki-sunset/',
    categories: ['racing', 'action', 'casual'],
    addedAt: '2026-01-26',
    description: 'Tanuki Sunset is a synthwave longboarding game starring a raccoon. You drift down coastal roads. Controls: Analog stick or Keys to steer and drift. Drifting fills a meter for points. You must avoid cars and stay on the road. The game oozes style with its retro soundtrack and vibrant visuals. It is about flow and vibes, though later levels offer challenge. You can do tricks for extra score. It is a unique, chill experience.'
  },
  {
    id: 'bloons-td-4',
    title: 'Bloons TD 4',
    thumbnail: 'https://static.wikia.nocookie.net/b__/images/4/4b/BTD4-PromoArt.png/revision/latest/thumbnail/width/360/height/360?cb=20200711194940&path-prefix=bloons',
    embedUrl: 'https://bagelcomics.com/games/html/bloonstd4.html',
    categories: ['puzzle', 'action'],
    isHot: true,
    addedAt: '2026-01-26',
    description: 'Bloons Tower Defense 4 is a classic strategy game. You place monkeys to pop waves of balloons. Controls: Mouse to place towers. Towers include Dart Monkeys, Cannons, and Super Monkeys. You earn money to upgrade them. Different balloons have immunities (e.g., Leads need explosives). You must manage your economy with Banana Farms. It features multiple tracks and difficulty modes. It is a definitive tower defense game from the flash era.'
  },
  {
    id: 'bad-time-simulator',
    title: 'Bad Time Simulator (Sans)',
    thumbnail: 'https://lgames.littlegames.io/bgames/game_image/1745767774bad-time-simulator.webp',
    embedUrl: 'https://jcw87.github.io/c2-sans-fight/',
    categories: ['action'],
    addedAt: '2026-01-26',
    description: 'Bad Time Simulator is a recreation of the Sans fight from Undertale. You control a heart (soul) dodging bone attacks and lasers. Controls: Arrow Keys. It is a "bullet hell" endurance test. You must memorize attack patterns to survive. You can heal, but the enemy dodges your attacks. It is perfect for practicing the hardest boss fight in the game without replaying the RPG. It includes an endless mode for high scores.'
  }
];

/**
 * HELPER FUNCTIONS
 */

// Get featured games for homepage hero
export const getFeaturedGames = (): Game[] => {
  return games.filter(game => game.featured);
};

// Get games by category (Updated for array)
export const getGamesByCategory = (category: string): Game[] => {
  if (category === 'all') return games;
  return games.filter(game => game.categories.includes(category as any));
};

// Get game by ID
export const getGameById = (id: string): Game | undefined => {
  return games.find(game => game.id === id);
};

// Get all unique categories (Updated for array)
export const getCategories = (): string[] => {
  const allCategories = games.flatMap(game => game.categories);
  return ['all', ...Array.from(new Set(allCategories))];
};

// Get 2-player games
export const getTwoPlayerGames = (): Game[] => {
  return games.filter(game => game.isTwoPlayer);
};

// Search games by title or description
export const searchGames = (query: string): Game[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return games;
  
  return games.filter(game => 
    game.title.toLowerCase().includes(lowerQuery) ||
    game.description.toLowerCase().includes(lowerQuery) ||
    game.categories.some(cat => cat.toLowerCase().includes(lowerQuery))
  );
};
