import { Color, FEBRUARY_COLOR_SET, JANUARY_COLOR_SET, OUT_COLOR_SET } from "../../../../shared/color";
import { SHARED_IMAGES } from "../../../../shared/constants";
import { BookColors, FebruaryBook, FebruaryChapter } from "../reader.february.constants";

export const holyColors: BookColors = {
  white: JANUARY_COLOR_SET.white,
  lightWarm: JANUARY_COLOR_SET.yellow,
  lightCool: OUT_COLOR_SET.almostWhite,
  midWarm: FEBRUARY_COLOR_SET.red,
  midCool: OUT_COLOR_SET.lightGray,
  darkWarm: OUT_COLOR_SET.redderGray,
  darkCool: Color.fromString('rgb(2, 61, 139)'),
  black: FEBRUARY_COLOR_SET.black,
}
const HOLY_CHAPTERS: FebruaryChapter[] = [[
  {
    markdown: `# Holy Sonnets
## by John Donne
With thanks to [Project Gutenberg](https://www.gutenberg.org/files/48688/48688-h/48688-h.htm#pagei.322)\n
Music adapted from the works of Jan Dismas Zelenka (1679-1745)`
  },
  {
    poem: [
      {
        markdown: `**Thou** hast made me,`,
      },
      {
        markdown: `*And*`,
      },
      {
        markdown: `shall thy work`,
      },
      {
        markdown: `*decay*?`,
      },
      {
        markdown: `Repaire me now,`,
        line: 1,
      },
      {
        markdown: `for **now** mine *end* doth haste,`,
        line: 1,
      },
      {
        markdown: `I *runne* to death,`,
        line: 2,
      },
      {
        markdown: `and **death**`,
        line: 2,
      },
      {
        markdown: `meets me`,
        line: 2,
      },
      {
        markdown: `*as fast*,`,
        line: 2,
      },
      {
        markdown: `And *all* my pleasures`,
        line: 3,
      },
      {
        markdown: `are like *yesterday*;`,
        line: 3,
      },
      {
        markdown: `I *dare* not`,
        line: 4,
      },
      {
        markdown: `move my dimme eyes`,
        line: 4,
      },
      {
        markdown: `any way,`,
        line: 4,
      },
      {
        markdown: `**Despaire**`,
        line: 5,
      },
      {
        markdown: `behind,`,
        line: 5,
      },
      {
        markdown: `and death`,
        line: 5,
      },
      {
        markdown: `before`,
        line: 5,
      },
      {
        markdown: `doth cast`,
        line: 5,
      },
      {
        markdown: `*Such* terrour,`,
        line: 6,
      },
      {
        markdown: `and my`,
        line: 6,
      },
      {
        markdown: `*feeble*`,
        line: 6,
      },
      {
        markdown: `flesh`,
        line: 6,
      },
      {
        markdown: `doth waste`,
        line: 6,
      },
      {
        markdown: `by sinne in it,`,
        line: 7,
      },
      {
        markdown: `which *it*`,
        line: 7,
      },
      {
        markdown: `t'wards **hell**`,
        line: 7,
      },
      {
        markdown: `doth weigh;`,
        line: 7,
      },
      {
        markdown: `Onely **thou** art above,`,
        line: 8,
      },
      {
        markdown: `and when towards **thee**`,
        line: 8,
      },
      {
        markdown: `By thy leave`,
        line: 9,
      },
      {
        markdown: `I can *looke*`,
        line: 9,
      },
      {
        markdown: `I **rise againe**;`,
        line: 9,
      },
      {
        markdown: `But our *old*`,
        line: 10,
      },
      {
        markdown: `**subtle foe**`,
        line: 10,
      },
      {
        markdown: `so *tempteth* me,`,
        line: 10,
      },
      {
        markdown: `That not **one houre**`,
        line: 11,
      },
      {
        markdown: `my *selfe*`,
        line: 11,
      },
      {
        markdown: `I can sustaine;`,
        line: 11,
      },
      {
        markdown: `**Thy Grace**`,
        line: 12,
      },
      {
        markdown: `may wing me`,
        line: 12,
      },
      {
        markdown: `to prevent his art,`,
        line: 12,
      },
      {
        markdown: `And **thou**`,
        line: 13,
      },
      {
        markdown: `like **Adamant**`,
        line: 13,
      },
      {
        markdown: `draw`,
        line: 13,
      },
      {
        markdown: `mine *iron*`,
        line: 13,
      },
      {
        markdown: `heart.`,
        line: 13,
      },
    ]
  },
  {
    poem: [
      {
        markdown: `As *due*`,
      },
      {
        markdown: `by *many titles*`,
      },
      {
        markdown: `I resigne`,
      },
      {
        markdown: `My *selfe*`,
        line: 1,
      },
      {
        markdown: `to **thee**,`,
        line: 1,
      },
      {
        markdown: `*O* **God**,`,
        line: 1,
      },
      {
        markdown: `*first*`,
        line: 1,
      },
      {
        markdown: `I was **made**`,
        line: 1,
      },
      {
        markdown: `By **thee**,`,
        line: 2,
      },
      {
        markdown: `and **for** thee,`,
        line: 2,
      },
      {
        markdown: `and when`,
        line: 2,
      },
      {
        markdown: `I was`,
        line: 2,
      },
      {
        markdown: `*decay'd*`,
        line: 2,
      },
      {
        markdown: `*Thy*`,
        line: 3,
      },
      {
        markdown: `**blood**`,
        line: 3,
      },
      {
        markdown: `bought that,`,
        line: 3,
      },
      {
        markdown: `the which`,
        line: 3,
      },
      {
        markdown: `*before*`,
        line: 3,
      },
      {
        markdown: `was thine;`,
        line: 3,
      },
      {
        markdown: `I am thy *sonne*,`,
        line: 4,
      },
      {
        markdown: `**made**`,
        line: 4,
      },
      {
        markdown: `with thy *selfe*`,
        line: 4,
      },
      {
        markdown: `to *shine*,`,
        line: 4,
      },
      {
        markdown: `**Thy** servant,`,
        line: 5,
      },
      {
        markdown: `whose *paines*`,
        line: 5,
      },
      {
        markdown: `thou hast`,
        line: 5,
      },
      {
        markdown: `**still**`,
        line: 5,
      },
      {
        markdown: `repaid,`,
        line: 5,
      },
      {
        markdown: `**Thy** sheep,`,
        line: 6,
      },
      {
        markdown: `**thine Image**,`,
        line: 6,
      },
      {
        markdown: `*and*`,
        line: 6,
      },
      {
        markdown: `till I **betray'd**`,
        line: 6,
      },
      {
        markdown: `My *selfe*`,
        line: 7,
      },
      {
        markdown: `a temple`,
        line: 7,
      },
      {
        markdown: `of thy *Spirit* **divine**`,
        line: 7,
      },
      {
        markdown: `Why`,
        line: 8,
      },
      {
        markdown: `doth the **devill**`,
        line: 8,
      },
      {
        markdown: `then`,
        line: 8,
      },
      {
        markdown: `*usurpe*`,
        line: 8,
      },
      {
        markdown: `on mee?`,
        line: 8,
      },
      {
        markdown: `*Why* doth he *steale*,`,
        line: 9,
      },
      {
        markdown: `nay **ravish**`,
        line: 9,
      },
      {
        markdown: `that's thy right?`,
        line: 9,
      },
      {
        markdown: `Except *thou* rise`,
        line: 10,
      },
      {
        markdown: `and for *thine owne worke*`,
        line: 10,
      },
      {
        markdown: `fight,`,
        line: 10,
      },
      {
        markdown: `*Oh* I shall soone despaire,`,
        line: 11,
      },
      {
        markdown: `when I doe **see**`,
        line: 11,
      },
      {
        markdown: `That **thou** lov'st mankind *well*`,
        line: 12,
      },
      {
        markdown: `yet wilt'not *chuse* me`,
        line: 12,
      },
      {
        markdown: `And *Satan*`,
        line: 13,
      },
      {
        markdown: `**hates** me,`,
        line: 13,
      },
      {
        markdown: `yet is loth`,
        line: 13,
      },
      {
        markdown: `to *lose* mee`,
        line: 13,
      },
    ],
    theme: 1,
  },
  {
    poem: [
      {
        markdown: `*O* **might**`,
      },
      {
        markdown: `those *sighes* and *teares*`
      },
      {
        markdown: `returne againe`,
      },
      {
        markdown: `Into my breast and eyes,`,
        line: 1,
      },
      {
        markdown: `which I have spent,`,
        line: 1,
      },
      {
        markdown: `That I might`,
        line: 2,
      },
      {
        markdown: `in this`,
        line: 2,
      },
      {
        markdown: `*holy*`,
        line: 2,
      },
      {
        markdown: `discontent`,
        line: 2,
      },
      {
        markdown: `Mourne with some fruit,`,
        line: 3,
      },
      {
        markdown: `as I have mourn'd in vaine;`,
        line: 3,
      },
      {
        markdown: `In mine`,
        line: 4,
      },
      {
        markdown: `**Idolatry**`,
        line: 4,
      },
      {
        markdown: `what *showres* of raine`,
        line: 4,
      },
      {
        markdown: `Mine eyes`,
        line: 5,
      },
      {
        markdown: `did **waste**?`,
        line: 5,
      },
      {
        markdown: `What **griefs**`,
        line: 5,
      },
      {
        markdown: `my heart`,
        line: 5,
      },
      {
        markdown: `did rent?`,
        line: 5,
      },
      {
        markdown: `That sufferance`,
        line: 6,
      },
      {
        markdown: `**was**`,
        line: 6,
      },
      {
        markdown: `my sinne;`,
        line: 6,
      },
      {
        markdown: `now I repent;`,
        line: 6,
      },
      {
        markdown: `'Cause I *did* suffer`,
        line: 7,
      },
      {
        markdown: `I **must** suffer`,
        line: 7,
      },
      {
        markdown: `paine.`,
        line: 7,
      },
      {
        markdown: `Th'hydroptique drunkard,`,
        line: 8,
      },
      {
        markdown: `and night-scouting *thiefe*,`,
        line: 8,
      },
      {
        markdown: `The itchy **Letcher**`,
        line: 9,
      },
      {
        markdown: `and selfe tickling *proud*`,
        line: 9,
      },
      {
        markdown: `Have the remembrance`,
        line: 10,
      },
      {
        markdown: `of *past joyes*,`,
        line: 10,
      },
      {
        markdown: `for reliefe`,
        line: 10,
      },
      {
        markdown: `Of comming ills.`,
        line: 11,
      },
      {
        markdown: `To`,
        line: 11,
      },
      {
        markdown: `**(poore)**`,
        line: 11,
      },
      {
        markdown: `me`,
        line: 11,
      },
      {
        markdown: `is *allow'd*`,
        line: 11,
      },
      {
        markdown: `No ease;`,
        line: 12,
      },
      {
        markdown: `for, *long*, yet vehement`,
        line: 12,
      },
      {
        markdown: `**griefe**`,
        line: 12,
      },
      {
        markdown: `hath beene`,
        line: 12,
      },
      {
        markdown: `*Th'effect*`,
        line: 13,
      },
      {
        markdown: `and cause,`,
        line: 13,
      },
      {
        markdown: `**the punishment**`,
        line: 13,
      },
      {
        markdown: `**and sinne.**`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `Oh my **blacke** Soule!`,
      },
      {
        markdown: `now`
      },
      {
        markdown: `thou art summoned`,
      },
      {
        markdown: `By **sicknesse**, deaths herald,`,
        line: 1,
      },
      {
        markdown: `and champion;`,
        line: 1,
      },
      {
        markdown: `Thou art`,
        line: 2,
      },
      {
        markdown: `like a *pilgrim*,`,
        line: 2,
      },
      {
        markdown: `which *abroad*`,
        line: 2,
      },
      {
        markdown: `hath done`,
        line: 2,
      },
      {
        markdown: `**Treason**,`,
        line: 3,
      },
      {
        markdown: `and durst not turne`,
        line: 3,
      },
      {
        markdown: `to whence`,
        line: 3,
      },
      {
        markdown: `hee is fled,`,
        line: 3,
      },
      {
        markdown: `Or like`,
        line: 4,
      },
      {
        markdown: `a *thiefe*,`,
        line: 4,
      },
      {
        markdown: `which`,
        line: 4,
      },
      {
        markdown: `till *deaths doome* be read,`,
        line: 4,
      },
      {
        markdown: `*Wisheth* hemselfe *delivered*`,
        line: 5,
      },
      {
        markdown: `from prison;`,
        line: 5,
      },
      {
        markdown: `But **damn'd**`,
        line: 6,
      },
      {
        markdown: `and hal'd to *execution*`,
        line: 6,
      },
      {
        markdown: `Wisheth`,
        line: 7,
      },
      {
        markdown: `that *still* he might`,
        line: 7,
      },
      {
        markdown: `be`,
        line: 7,
      },
      {
        markdown: `imprisoned.`,
        line: 7,
      },
      {
        markdown: `Yet **grace**,`,
        line: 8,
      },
      {
        markdown: `if thou repent,`,
        line: 8,
      },
      {
        markdown: `thou *canst not lacke*;`,
        line: 8,
      },
      {
        markdown: `But **who**`,
        line: 9,
      },
      {
        markdown: `shall give thee`,
        line: 9,
      },
      {
        markdown: `that grace`,
        line: 9,
      },
      {
        markdown: `to beginne?`,
        line: 9,
      },
      {
        markdown: `Oh **make** thy selfe`,
        line: 10,
      },
      {
        markdown: `with *holy mourning*`,
        line: 10,
      },
      {
        markdown: `blacke,`,
        line: 10,
      },
      {
        markdown: `And **red**`,
        line: 11,
      },
      {
        markdown: `with blushing,`,
        line: 11,
      },
      {
        markdown: `as thou art with **sinne**;`,
        line: 11,
      },
      {
        markdown: `Or`,
        line: 12,
      },
      {
        markdown: `wash thee in *Christs blood*,`,
        line: 12,
      },
      {
        markdown: `which hath this might`,
        line: 12,
      },
      {
        markdown: `That`,
        line: 13,
      },
      {
        markdown: `being red,`,
        line: 13,
      },
      {
        markdown: `it dyes red soules`,
        line: 13,
      },
      {
        markdown: `to white.`,
        line: 13,
      },
    ]
  },
  {
    poem: [
      {
        markdown: `*I am*`,
      },
      {
        markdown: `a **little world**`,
      },
      {
        markdown: `made *cunningly*`,
      },
      {
        markdown: `Of *Elements*,`,
        line: 1,
      },
      {
        markdown: `and an *Angelike* spright,`,
        line: 1,
      },
      {
        markdown: `But *black sinne*`,
        line: 2,
      },
      {
        markdown: `hath *betraid*`,
        line: 2,
      },
      {
        markdown: `to **endlesse night**`,
        line: 2,
      },
      {
        markdown: `My worlds **both** parts,`,
        line: 3,
      },
      {
        markdown: `and`,
        line: 3,
      },
      {
        markdown: `(oh)`,
        line: 3,
      },
      {
        markdown: `*both parts must die*.`,
        line: 3,
      },
      {
        markdown: `**You**`,
        line: 4,
      },
      {
        markdown: `which *beyond* that heaven`,
        line: 4,
      },
      {
        markdown: `which was most high`,
        line: 4,
      },
      {
        markdown: `Have found *new* spheares,`,
        line: 5,
      },
      {
        markdown: `and of *new lands*`,
        line: 5,
      },
      {
        markdown: `can write,`,
        line: 5,
      },
      {
        markdown: `Powre now`,
        line: 6,
      },
      {
        markdown: `new *seas* in mine eyes,`,
        line: 6,
      },
      {
        markdown: `so that I might`,
        line: 6,
      },
      {
        markdown: `**Drowne** my world`,
        line: 7,
      },
      {
        markdown: `with my weeping`,
        line: 7,
      },
      {
        markdown: `earnestly,`,
        line: 7,
      },
      {
        markdown: `Or wash it,`,
        line: 8,
      },
      {
        markdown: `if`,
        line: 8,
      }, 
      {
        markdown: `it must be drown'd`,
        line: 8,
      },
      {
        markdown: `no more:`,
        line: 8,
      },
      {
        markdown: `But oh`,
        line: 9,
      },
      {
        markdown: `it must be **burnt**!`,
        line: 9,
      },
      {
        markdown: `alas`,
        line: 9,
      },
      {
        markdown: `the *fire*`,
        line: 9,
      },
      {
        markdown: `Of lust`,
        line: 10,
      },
      {
        markdown: `and envie`,
        line: 10,
      },
      {
        markdown: `have burnt it`,
        line: 10,
      },
      {
        markdown: `heretofore,`,
        line: 10,
      },
      {
        markdown: `And made it fouler;`,
        line: 11,
      },
      {
        markdown: `Let`,
        line: 11,
      },
      {
        markdown: `their flames`,
        line: 11,
      },
      {
        markdown: `*retire*`,
        line: 11,
      },
      {
        markdown: `And *burne* me`,
        line: 12,
      },
      {
        markdown: `O **Lord**,`,
        line: 12,
      },
      {
        markdown: `with a *fiery zeale*`,
        line: 12,
      },
      {
        markdown: `Of **thee**`,
        line: 13,
      },
      {
        markdown: `and they house,`,
        line: 13,
      },
      {
        markdown: `which doth`,
        line: 13,
      },
      {
        markdown: `in *eating*`,
        line: 13,
      },
      {
        markdown: `heale.`,
        line: 13,
      },
    ]
  },
  {
    poem: [
      {
        markdown: `*This*`,
      },
      {
        markdown: `is my playes *last scene*,`,
      },
      {
        markdown: `here **heavens** appoint`,
      },
      {
        markdown: `My pilgrimages`,
        line: 1,
      },
      {
        markdown: `last mile;`,
        line: 1,
      },
      {
        markdown: `and my *race*`,
        line: 1,
      },
      {
        markdown: `Idly,`,
        line: 2,
      },
      {
        markdown: `yet *quickly* runne`,
        line: 2,
      },
      {
        markdown: `hath this *last pace*,`,
        line: 2,
      },
      {
        markdown: `My spans last inch,`,
        line: 3,
      },
      {
        markdown: `my minutes *latest point*`,
        line: 3,
      },
      {
        markdown: `And **gluttonous death**,`,
        line: 4,
      },
      {
        markdown: `will *instantly* unjoynt`,
        line: 4,
      },
      {
        markdown: `My body,`,
        line: 5,
      },
      {
        markdown: `and soule,`,
        line: 5,
      },
      {
        markdown: `and I shall sleepe`,
        line: 5,
      },
      {
        markdown: `a space,`,
        line: 5,
      },
      {
        markdown: `But`,
        line: 6,
      },
      {
        markdown: `my **ever-waking part**`,
        line: 6,
      },
      {
        markdown: `shall see **that face**,`,
        line: 6,
      },
      {
        markdown: `Whose *feare*`,
        line: 7,
      },
      {
        markdown: `already`,
        line: 7,
      },
      {
        markdown: `shakes my *every joynt*:`,
        line: 7,
      },
      {
        markdown: `Then,`,
        line: 8,
      },
      {
        markdown: `as my soule,`,
        line: 8,
      },
      {
        markdown: `to heaven`,
        line: 8,
      },
      {
        markdown: `*her first seate*,`,
        line: 8,
      },
      {
        markdown: `takes flight,`,
        line: 8,
      },
      {
        markdown: `And *earth-borne body*,`,
        line: 9,
      },
      {
        markdown: `in the earth`,
        line: 9,
      },
      {
        markdown: `shall dwell,`,
        line: 9,
      },
      {
        markdown: `So,`,
        line: 10,
      },
      {
        markdown: `fall my sinnes,`,
        line: 10,
      },
      {
        markdown: `that all may have their right,`,
        line: 10,
      },
      {
        markdown: `To where they are bred,`,
        line: 11,
      },
      {
        markdown: `and would presse me,`,
        line: 11,
      },
      {
        markdown: `to hell.`,
        line: 11,
      },
      {
        markdown: `Impute me righteous,`,
        line: 12,
      },
      {
        markdown: `thus **purg'd**`,
        line: 12,
      },
      {
        markdown: `of evill,`,
        line: 12,
      },
      {
        markdown: `For *thus*`,
        line: 13,
      },
      {
        markdown: `I leave the world,`,
        line: 13,
      },
      {
        markdown: `the flesh,`,
        line: 13,
      },
      {
        markdown: `the devill.`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `At the *round earth's*`,
      },
      {
        markdown: `**imagin'd**`,
      },
      {
        markdown: `corners,`,
      },
      {
        markdown: `blow`,
      },
      {
        markdown: `Your trumpets,`,
        line: 1,
      },
      {
        markdown: `**Angells**,`,
        line: 1,
      },
      {
        markdown: `and arise,`,
        line: 1,
      },
      {
        markdown: `*arise*`,
        line: 1,
      },
      {
        markdown: `From death,`,
        line: 2,
      },
      {
        markdown: `you *numberlesse*`,
        line: 2,
      },
      {
        markdown: `infinities`,
        line: 2,
      },
      {
        markdown: `Of soules,`,
        line: 3,
      },
      {
        markdown: `and`,
        line: 3,
      },
      {
        markdown: `to your scattred bodies`,
        line: 3,
      },
      {
        markdown: `goe,`,
        line: 3,
      },
      {
        markdown: `*All*`,
        line: 4,
      },
      {
        markdown: ` whom the flood *did*,`,
        line: 4,
      },
      {
        markdown: `and fire *shall*`,
        line: 4,
      },
      {
        markdown: `o'erthrow,`,
        line: 4,
      },
      {
        markdown: `**All**`,
        line: 5,
      },
      {
        markdown: `whom *warre*,`,
        line: 5,
      },
      {
        markdown: `dearth,`,
        line: 5,
      },
      {
        markdown: `age,`,
        line: 5,
      },
      {
        markdown: `*agues*,`,
        line: 5,
      },
      {
        markdown: `**tyrannies**,`,
        line: 5,
      },
      {
        markdown: `*Despaire*,`,
        line: 6,
      },
      {
        markdown: `law,`,
        line: 6,
      },
      {
        markdown: `chance,`,
        line: 6,
      },
      {
        markdown: `hath **slaine**, and you`,
        line: 6,
      },
      {
        markdown: `whose **eyes**,`,
        line: 6,
      },
      {
        markdown: `*Shall behold God*,`,
        line: 7,
      },
      {
        markdown: `and *never*`,
        line: 7,
      },
      {
        markdown: `tast`,
        line: 7,
      },
      {
        markdown: `deaths woe.`,
        line: 7,
      },
      {
        markdown: `But`,
        line: 8,
      },
      {
        markdown: `let them *sleepe*, Lord,`,
        line: 8,
      },
      {
        markdown: `and mee mourne`,
        line: 8,
      },
      {
        markdown: `a space,`,
        line: 8,
      },
      {
        markdown: `For,`,
        line: 9,
      },
      {
        markdown: `if above all these,`,
        line: 9,
      },
      {
        markdown: `**my** sinnes abound,`,
        line: 9,
      },
      {
        markdown: `'Tis *late*`,
        line: 10,
      },
      {
        markdown: `to aske abundance`,
        line: 10,
      },
      {
        markdown: `of thy grace,`,
        line: 10,
      },
      {
        markdown: `When *wee* are there;`,
        line: 11,
      },
      {
        markdown: `here`,
        line: 11,
      },
      {
        markdown: `on this *lowly ground*,`,
        line: 11,
      },
      {
        markdown: `*Teach* me`,
        line: 12,
      },
      {
        markdown: `how to repent;`,
        line: 12,
      },
      {
        markdown: `for that's as good`,
        line: 12,
      },
      {
        markdown: `As if`,
        line: 13,
      },
      {
        markdown: `thou hadst seal'd`,
        line: 13,
      },
      {
        markdown: `my pardon`,
        line: 13,
      },
      {
        markdown: `with **thy blood**.`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `If *faithfull soules*`,
      },
      {
        markdown: `be *alike* **glorifi'd**`,
      },
      {
        markdown: `As *Angels*,`,
        line: 1,
      },
      {
        markdown: `then my *fathers soule*`,
        line: 1,
      },
      {
        markdown: `doth see,`,
        line: 1,
      },
      {
        markdown: `And adds *this even*`,
        line: 2,
      },
      {
        markdown: `to **full felicitie**,`,
        line: 2,
      },
      {
        markdown: `That *valiantly*`,
        line: 3,
      },
      {
        markdown: `I **hels wide mouth**`,
        line: 3,
      },
      {
        markdown: `o'rstride:`,
        line: 3,
      },
      {
        markdown: `But if`,
        line: 4,
      },
      {
        markdown: `our *mindes*`,
        line: 4,
      },
      {
        markdown: `to these soules`,
        line: 4,
      },
      {
        markdown: `be descry'd`,
        line: 4,
      },
      {
        markdown: `By circumstances,`,
        line: 5,
      },
      {
        markdown: `and by **signes** that be`,
        line: 5,
      },
      {
        markdown: `*Apparent*`,
        line: 6,
      },
      {
        markdown: `in us,`,
        line: 6,
      },
      {
        markdown: `not immediately,`,
        line: 6,
      },
      {
        markdown: `How shall *my* mindes`,
        line: 7,
      },
      {
        markdown: `*white truth*`,
        line: 7,
      },
      {
        markdown: `by *them*`,
        line: 7,
      },
      {
        markdown: `be try'd?`,
        line: 7,
      },
      {
        markdown: `They see`,
        line: 8,
      },
      {
        markdown: `**idolatrous lovers**`,
        line: 8,
      },
      {
        markdown: `weepe and mourne,`,
        line: 8,
      },
      {
        markdown: `And *vile*`,
        line: 9,
      },
      {
        markdown: `blasphemous`,
        line: 9,
      },
      {
        markdown: `**Conjurers**`,
        line: 9,
      },
      {
        markdown: `to call`,
        line: 9,
      },
      {
        markdown: `On **Iefus name**,`,
        line: 10,
      },
      {
        markdown: `and *Pharisaicall*`,
        line: 10,
      },
      {
        markdown: `*Dissemblers*`,
        line: 11,
      },
      {
        markdown: `feigne devotion.`,
        line: 11,
      },
      {
        markdown: `Then turne`,
        line: 11,
      },
      {
        markdown: `O *pensive soule*,`,
        line: 12,
      },
      {
        markdown: `to **God**,`,
        line: 12,
      },
      {
        markdown: `for *he* knowes best`,
        line: 12,
      },
      {
        markdown: `Thy *true* griefe,`,
        line: 13,
      },
      {
        markdown: `for **he**`,
        line: 13,
      },
      {
        markdown: `put it in *my breast*`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `If *poysonous mineralls*,`
      },
      {
        markdown: `and if **that tree**,`
      },
      {
        markdown: `Whose **fruit**`,
        line: 1,
      },
      {
        markdown: `threw death`,
        line: 1,
      },
      {
        markdown: `on *else immortall* us,`,
        line: 1,
      },
      {
        markdown: `If *lecherous goats*,`,
        line: 2,
      },
      {
        markdown: `if *serpents envious*`,
        line: 2,
      },
      {
        markdown: `Cannot be **damn'd**;`,
        line: 3,
      },
      {
        markdown: `*Alas*;`,
        line: 3,
      },
      {
        markdown: `why should *I* bee?`,
        line: 3,
      },
      {
        markdown: `Why should *intent*`,
        line: 4,
      },
      {
        markdown: `or *reason*,`,
        line: 4,
      },
      {
        markdown: `borne in **mee**,`,
        line: 4,
      },
      {
        markdown: `Make *sinnes*, else **equall**,`,
        line: 5,
      },
      {
        markdown: `in mee`,
        line: 5,
      },
      {
        markdown: `more heinous?`,
        line: 5,
      },
      {
        markdown: `And *mercy* being easie,`,
        line: 6,
      },
      {
        markdown: `and **glorious**`,
        line: 6,
      },
      {
        markdown: `To God;`,
        line: 7,
      },
      {
        markdown: `in *his sterne wrath*,`,
        line: 7,
      },
      {
        markdown: `why *threatens* hee?`,
        line: 7,
      },
      {
        markdown: `But who am *I*`,
        line: 8,
      },
      {
        markdown: `that dare dispute`,
        line: 8,
      },
      {
        markdown: `with **thee**`,
        line: 8,
      },
      {
        markdown: `O God?`,
        line: 9,
      },
      {
        markdown: `*Oh!*`,
        line: 9,
      },
      {
        markdown: `of *thine onely* worthy`,
        line: 9,
      },
      {
        markdown: `**blood**,`,
        line: 9,
      },
      {
        markdown: `And *my teares*,`,
        line: 10,
      },
      {
        markdown: `*make* a heavenly`,
        line: 10,
      },
      {
        markdown: `*Lethean*`,
        line: 10,
      },
      {
        markdown: `flood,`,
        line: 10,
      },
      {
        markdown: `And *dronwe* in it`,
        line: 11,
      },
      {
        markdown: `my *sinnes blacke memorie*;`,
        line: 11,
      },
      {
        markdown: `That **thou**`,
        line: 12,
      },
      {
        markdown: `remember them,`,
        line: 12,
      },
      {
        markdown: `*some* claime`,
        line: 12,
      },
      {
        markdown: `as debt,`,
        line: 12,
      },
      {
        markdown: `*I*`,
        line: 13,
      },
      {
        markdown: `thinke it mercy,`,
        line: 13,
      },
      {
        markdown: `if thou wilt`,
        line: 13,
      },
      {
        markdown: `**forget**.`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `**Death**`,
      },
      {
        markdown: `*be not proud*,`,
      },
      {
        markdown: `though *some*`
      },
      {
        markdown: `have *called* thee`,
      },
      {
        markdown: `*Mighty* and *dreadfull*,`,
        line: 1,
      },
      {
        markdown: `for,`,
        line: 1,
      },
      {
        markdown: `thou *art*`,
        line: 1,
      },
      {
        markdown: `*not*`,
        line: 1,
      },
      {
        markdown: `*soe*,`,
        line: 1,
      },
      {
        markdown: `For, those, whom`,
        line: 2,
      },
      {
        markdown: `thou *think'st*,`,
        line: 2,
      },
      {
        markdown: `thou dost *overthrow*,`,
        line: 2,
      },
      {
        markdown: `Die **not**,`,
        line: 3,
      },
      {
        markdown: `*poore* death,`,
        line: 3,
      },
      {
        markdown: `nor yet canst thou`,
        line: 3,
      },
      {
        markdown: `kill *mee*.`,
        line: 3,
      },
      {
        markdown: `From *rest*`,
        line: 4,
      },
      {
        markdown: `and *sleepe*,`,
        line: 4,
      },
      {
        markdown: `which but thy *pictures* bee`,
        line: 4,
      },
      {
        markdown: `Much pleasure,`,
        line: 5,
      },
      {
        markdown: `then from *thee*,`,
        line: 5,
      },
      {
        markdown: `much *more* must flow,`,
        line: 5,
      },
      {
        markdown: `And *soonest*`,
        line: 6,
      },
      {
        markdown: `our *best men*`,
        line: 6,
      },
      {
        markdown: `with *thee* doe goe,`,
        line: 6,
      },
      {
        markdown: `Rest of their bones,`,
        line: 7,
      },
      {
        markdown: `and soules deliverie.`,
        line: 7,
      },
      {
        markdown: `Thou art *slave*`,
        line: 8,
      },
      {
        markdown: `to **Fate**,`,
        line: 8,
      },
      {
        markdown: `*Chance*,`,
        line: 8,
      },
      {
        markdown: `kings, and desperate men,`,
        line: 8,
      },
      {
        markdown: `And dost`,
        line: 9,
      },
      {
        markdown: `with *poyson*,`,
        line: 9,
      },
      {
        markdown: `**warre**,`,
        line: 9,
      },
      {
        markdown: `and *sicknesse*`,
        line: 9,
      },
      {
        markdown: `dwell,`,
        line: 9,
      },
      {
        markdown: `And poppie, or *charmes*`,
        line: 10,
      },
      {
        markdown: `can make us sleepe as well,`,
        line: 10,
      },
      {
        markdown: `And *better*`,
        line: 11,
      },
      {
        markdown: `than thy stroake;`,
        line: 11,
      },
      {
        markdown: `why`,
        line: 11,
      },
      {
        markdown: `*swell'st* thou`,
        line: 11,
      },
      {
        markdown: `then?`,
        line: 11,
      },
      {
        markdown: `*One short sleepe*`,
        line: 12,
      },
      {
        markdown: `past,`,
        line: 12,
      },
      {
        markdown: `wee wake`,
        line: 12,
      },
      {
        markdown: `**eternally**,`,
        line: 12,
      },
      {
        markdown: `And **death**`,
        line: 13,
      },
      {
        markdown: `*shall*`,
        line: 13,
      },
      {
        markdown: `*be*`,
        line: 13,
      },
      {
        markdown: `*no*`,
        line: 13,
      },
      {
        markdown: `*more*;`,
        line: 13,
      },
      {
        markdown: `death,`,
        line: 13,
      },
      {
        markdown: `**thou shalt die**.`,
        line: 13,
      },
    ]
  },
  {
    poem: [
      {
        markdown: `**Spit**`,
      },
      {
        markdown: `in my *face*`,
      },
      {
        markdown: `you Jewes,`,
      },
      {
        markdown: `and pierce my side,`,
      },
      {
        markdown: `*Buffet*, and *scoffe*,`,
        line: 1,
      },
      {
        markdown: `scourge, and **crucifie** mee,`,
        line: 1,
      },
      {
        markdown: `For I have sinn'd,`,
        line: 2,
      },
      {
        markdown: `and *sinn'd*,`,
        line: 2,
      },
      {
        markdown: `and onely **hee**,`,
        line: 2,
      },
      {
        markdown: `Who`,
        line: 3,
      },
      {
        markdown: `could do **no** iniquitie,`,
        line: 3,
      },
      {
        markdown: `hath *dyed*:`,
        line: 3,
      },
      {
        markdown: `But *by* **my** *death*`,
        line: 4,
      },
      {
        markdown: `can not be satisfied`,
        line: 4,
      },
      {
        markdown: `My *sinnes*,`,
        line: 5,
      },
      {
        markdown: `which passe`,
        line: 5,
      },
      {
        markdown: `the *Jewes impiety*:`,
        line: 5,
      },
      {
        markdown: `They kill'd **once**`,
        line: 6,
      },
      {
        markdown: `an inglorious man,`,
        line: 6,
      },
      {
        markdown: `but *I*`,
        line: 6,
      },
      {
        markdown: `Crucifie him *daily*,`,
        line: 7,
      },
      {
        markdown: `being now *glorified*.`,
        line: 7,
      },
      {
        markdown: `Oh let mee`,
        line: 8,
      },
      {
        markdown: `then,`,
        line: 8,
      },
      {
        markdown: `his **strange love**`,
        line: 8,
      },
      {
        markdown: `*still*`,
        line: 8,
      },
      {
        markdown: `admire:`,
        line: 8,
      },
      {
        markdown: `Kings pardon,`,
        line: 9,
      },
      {
        markdown: `but *he*`,
        line: 9,
      },
      {
        markdown: `**bore our punishment**.`,
        line: 9,
      },
      {
        markdown: `And **Iacob** came`,
        line: 10,
      },
      {
        markdown: `cloth'd in vile`,
        line: 10,
      },
      {
        markdown: `harsh`,
        line: 10,
      },
      {
        markdown: `attire`,
        line: 10,
      },
      {
        markdown: `But to supplant,`,
        line: 11,
      },
      {
        markdown: `and with *gainfull* intent:`,
        line: 11,
      },
      {
        markdown: `*God*`,
        line: 12,
      },
      {
        markdown: `cloth'd himselfe`,
        line: 12,
      },
      {
        markdown: `in **vile mans flesh**,`,
        line: 12,
      },
      {
        markdown: `that so`,
        line: 12,
      },
      {
        markdown: `Hee might be *weake* enough`,
        line: 13,
      },
      {
        markdown: `to suffer **woe**.`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `Why are *wee*`,
      },
      {
        markdown: `by all creatures`,
      },
      {
        markdown: `waited on?`,
      },
      {
        markdown: `Why *doe*`,
        line: 1,
      },
      {
        markdown: `the *prodigall* elements`,
        line: 1,
      },
      {
        markdown: `supply`,
        line: 1,
      },
      {
        markdown: `*Life*`,
        line: 2,
      },
      {
        markdown: `and **food**`,
        line: 2,
      },
      {
        markdown: `to mee,`,
        line: 2,
      },
      {
        markdown: `being more pure`,
        line: 2,
      },
      {
        markdown: `than I,`,
        line: 2,
      },
      {
        markdown: `*Simple*,`,
        line: 3,
      },
      {
        markdown: `and further from corruption?`,
        line: 3,
      },
      {
        markdown: `Why brook'st thou,`,
        line: 4,
      },
      {
        markdown: `ignorant *horse*,`,
        line: 4,
      },
      {
        markdown: `**subjection**?`,
        line: 4,
      },
      {
        markdown: `Why dost thou`,
        line: 5,
      },
      {
        markdown: `bull,`,
        line: 5,
      },
      {
        markdown: `and **bore** so *seelily*`,
        line: 5,
      },
      {
        markdown: `Dissemble`,
        line: 6,
      },
      {
        markdown: `weaknesse, and`,
        line: 6,
      },
      {
        markdown: `by *one mans stroke*`,
        line: 6,
      },
      {
        markdown: `die,`,
        line: 6,
      },
      {
        markdown: `Whose *whole kinde*,`,
        line: 7,
      },
      {
        markdown: `you might **swallow**`,
        line: 7,
      },
      {
        markdown: `and feed upon?`,
        line: 7,
      },
      {
        markdown: `*Weaker* I am,`,
        line: 8,
      },
      {
        markdown: `woe is mee,`,
        line: 8,
      },
      {
        markdown: `and **worse**`,
        line: 8,
      },
      {
        markdown: `then you,`,
        line: 8,
      },
      {
        markdown: `*You* have not sinn'd,`,
        line: 9,
      },
      {
        markdown: `nor need be timorous.`,
        line: 9,
      },
      {
        markdown: `But *wonder*`,
        line: 10,
      },
      {
        markdown: `at a **greater wonder**,`,
        line: 10,
      },
      {
        markdown: `for to *us*`,
        line: 10,
      },
      {
        markdown: `Created nature`,
        line: 11,
      },
      {
        markdown: `doth`,
        line: 11,
      },
      {
        markdown: `these things`,
        line: 11,
      },
      {
        markdown: `*subdue*,`,
        line: 11,
      },
      {
        markdown: `But **their Creator**,`,
        line: 12,
      },
      {
        markdown: `whom *sin*,`,
        line: 12,
      },
      {
        markdown: `nor nature`,
        line: 12,
      },
      {
        markdown: `tyed,`,
        line: 12,
      },
      {
        markdown: `For *us*,`,
        line: 13,
      },
      {
        markdown: `his *Creatures*,`,
        line: 13,
      },
      {
        markdown: `and his foes,`,
        line: 13,
      },
      {
        markdown: `hath dyed.`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `What if *this present*`,
      },
      {
        markdown: `were`,
      },
      {
        markdown: `the **worlds last night**?`,
      },
      {
        markdown: `*Marke*`,
        line: 1,
      },
      {
        markdown: `in my heart,`,
        line: 1,
      },
      {
        markdown: `O Soule,`,
        line: 1,
      },
      {
        markdown: `where thou dost dwell,`,
        line: 1,
      },
      {
        markdown: `The picture`,
        line: 2,
      },
      {
        markdown: `of **Christ crucified**,`,
        line: 2,
      },
      {
        markdown: `and tell`,
        line: 2,
      },
      {
        markdown: `Whether`,
        line: 3,
      },
      {
        markdown: `that *countenance*`,
        line: 3,
      },
      {
        markdown: `can thee affright,`,
        line: 3,
      },
      {
        markdown: `*Teares*`,
        line: 4,
      },
      {
        markdown: `in his eyes`,
        line: 4,
      },
      {
        markdown: `*quench*`,
        line: 4,
      },
      {
        markdown: `the **amasing light**,`,
        line: 4,
      },
      {
        markdown: `**Blood**`,
        line: 5,
      },
      {
        markdown: `fills his frownes,`,
        line: 5,
      },
      {
        markdown: `which from`,
        line: 5,
      },
      {
        markdown: `his *pierc'd head*`,
        line: 5,
      },
      {
        markdown: `fell.`,
        line: 5,
      },
      {
        markdown: `And *can that tongue*`,
        line: 6,
      },
      {
        markdown: `**adjudge** thee`,
        line: 6,
      },
      {
        markdown: `unto hell,`,
        line: 6,
      },
      {
        markdown: `Which pray'd **forgivenesse**`,
        line: 7,
      },
      {
        markdown: `for his foes`,
        line: 7,
      },
      {
        markdown: `*fierce* spight?`,
        line: 7,
      },
      {
        markdown: `No, no;`,
        line: 8,
      },
      {
        markdown: `but as in my`,
        line: 8,
      },
      {
        markdown: `**idolatrie**`,
        line: 8,
      },
      {
        markdown: `I said`,
        line: 9,
      },
      {
        markdown: `to all`,
        line: 9,
      },
      {
        markdown: `my *profane mistresses*,`,
        line: 9,
      },
      {
        markdown: `**Beauty**,`,
        line: 10,
      },
      {
        markdown: `of pitty,`,
        line: 10,
      },
      {
        markdown: `*foulnesse only* is`,
        line: 10,
      },
      {
        markdown: `A signe`,
        line: 11,
      },
      {
        markdown: `of *rigour*:`,
        line: 11,
      },
      {
        markdown: `so I say`,
        line: 11,
      },
      {
        markdown: `to **thee**`,
        line: 11,
      },
      {
        markdown: `To *wicked spirits*`,
        line: 12,
      },
      {
        markdown: `are *horrid shapes*`,
        line: 12,
      },
      {
        markdown: `assign'd,`,
        line: 12,
      },
      {
        markdown: `This **beuateous forme**`,
        line: 13,
      },
      {
        markdown: `assures`,
        line: 13,
      },
      {
        markdown: `a pitious mind.`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `**Batter my heart**`,
      },
      {
        markdown: `*three* person'd`
      },
      {
        markdown: `**God**;`
      },
      {
        markdown: `for, you`,
      },
      {
        markdown: `As yet`,
        line: 1,
      },
      {
        markdown: `but *knocke*,`,
        line: 1,
      },
      {
        markdown: `breathe, shine,`,
        line: 1,
      },
      {
        markdown: `and *seeke to mend*;`,
        line: 1,
      },
      {
        markdown: `That I may *rise*,`,
        line: 2,
      },
      {
        markdown: `*and stand*,`,
        line: 2,
      },
      {
        markdown: `**o'erthrow mee**,`,
        line: 2,
      },
      {
        markdown: `and *bend*`,
        line: 2,
      },
      {
        markdown: `Your force, to **breake**,`,
        line: 3,
      },
      {
        markdown: `*blowe*,`,
        line: 3,
      },
      {
        markdown: `**burn**`,
        line: 3,
      },
      {
        markdown: `and *make me new*.`,
        line: 3,
      },
      {
        markdown: `I,`,
        line: 4,
      },
      {
        markdown: `like an *usurpt towne*,`,
        line: 4,
      },
      {
        markdown: `to another due,`,
        line: 4,
      },
      {
        markdown: `*Labour*`,
        line: 5,
      },
      {
        markdown: `to admit you, but`,
        line: 5,
      },
      {
        markdown: `Oh,`,
        line: 5,
      },
      {
        markdown: `*to no end*,`,
        line: 5,
      },
      {
        markdown: `**Reason**`,
        line: 6,
      },
      {
        markdown: `your *viceroy* in mee,`,
        line: 6,
      },
      {
        markdown: `mee *should* defend,`,
        line: 6,
      },
      {
        markdown: `But is **captiv'd**,`,
        line: 7,
      },
      {
        markdown: `and proves *weake* or *untrue*.`,
        line: 7,
      },
      {
        markdown: `Yet *dearely*`,
        line: 8,
      },
      {
        markdown: `I **love** you,`,
        line: 8,
      },
      {
        markdown: `and would *be loved*`,
        line: 8,
      },
      {
        markdown: `faine,`,
        line: 8,
      },
      {
        markdown: `But am *betroth'd*`,
        line: 9,
      },
      {
        markdown: `unto your **enemie**:`,
        line: 9,
      },
      {
        markdown: `**Divorce** mee,`,
        line: 10,
      },
      {
        markdown: `*untie*,`,
        line: 10,
      },
      {
        markdown: `or **breake** that knot`,
        line: 10,
      },
      {
        markdown: `againe,`,
        line: 10,
      },
      {
        markdown: `Take mee to you,`,
        line: 11,
      },
      {
        markdown: `**imprison** mee,`,
        line: 11,
      },
      {
        markdown: `for I`,
        line: 11,
      },
      {
        markdown: `Except you *enthrall* mee,`,
        line: 12,
      },
      {
        markdown: `**never**`,
        line: 12,
      },
      {
        markdown: `shall be free,`,
        line: 12,
      },
      {
        markdown: `Nor ever chast,`,
        line: 13,
      },
      {
        markdown: `except`,
        line: 13,
      },
      {
        markdown: `you **ravish** mee.`,
        line: 13,
      },
    ]
  },
  {
    poem: [
      {
        markdown: `Wilt thou love *God*,`,
      },
      {
        markdown: `as **he** thee!` 
      },
      {
        markdown: `then *digest*,`,
      },
      {
        markdown: `My **Soule**,`,
        line: 1,
      },
      {
        markdown: `this *wholesome meditation*,`,
        line: 1,
      },
      {
        markdown: `How **God**`,
        line: 2,
      },
      {
        markdown: `the Spirit,`,
        line: 2,
      },
      {
        markdown: `by *Angels* waited on`,
        line: 2,
      },
      {
        markdown: `In heaven,`,
        line: 3,
      },
      {
        markdown: `doth *make his Temple*`,
        line: 3,
      },
      {
        markdown: `in **thy brest**.`,
        line: 3,
      },
      {
        markdown: `The Father`,
        line: 4,
      },
      {
        markdown: `having begot`,
        line: 4,
      },
      {
        markdown: `a **Sonne** most *blest*,`,
        line: 4,
      },
      {
        markdown: `And *still begetting*,`,
        line: 5,
      },
      {
        markdown: `(for he ne'er **begonne**,)`,
        line: 5,
      },
      {
        markdown: `Hath *deign'd*`,
        line: 6,
      },
      {
        markdown: `to **chuse** thee`,
        line: 6,
      },
      {
        markdown: `by adoption,`,
        line: 6,
      },
      {
        markdown: `**Coheire**`,
        line: 7,
      },
      {
        markdown: `to his glory,`,
        line: 7,
      },
      {
        markdown: `and *Sabbaths* endlesse rest.`,
        line: 7,
      },
      {
        markdown: `And as`,
        line: 8,
      },
      {
        markdown: `a *robbed man*,`,
        line: 8,
      },
      {
        markdown: `which my search`,
        line: 8,
      },
      {
        markdown: `doth *finde*`,
        line: 8,
      },
      {
        markdown: `His **stolne** stuff`,
        line: 9,
      },
      {
        markdown: `sold,`,
        line: 9,
      },
      {
        markdown: `must *lose*`,
        line: 9,
      },
      {
        markdown: `or buy it againe:`,
        line: 9,
      },
      {
        markdown: `The **Sonne**`,
        line: 10,
      },
      {
        markdown: `*of glory came downe*,`,
        line: 10,
      },
      {
        markdown: `and was **slaine**,`,
        line: 10,
      },
      {
        markdown: `*Us*`,
        line: 11,
      },
      {
        markdown: `whom he had *made*,`,
        line: 11,
      },
      {
        markdown: `and Satan stolne,`,
        line: 11,
      },
      {
        markdown: `to unbinde.`,
        line: 11,
      },
      {
        markdown: `'Twas *much*,`,
        line: 12,
      },
      {
        markdown: `that man`,
        line: 12,
      },
      {
        markdown: `was *made like God*`,
        line: 12,
      },
      {
        markdown: `before,`,
        line: 12,
      },
      {
        markdown: `But,`,
        line: 13,
      },
      {
        markdown: `that **God**`,
        line: 13,
      },
      {
        markdown: `should be *made like man*,`,
        line: 13,
      },
      {
        markdown: `**much more**.`,
        line: 13,
      },
    ]
  },
  {
    poem: [
      {
        markdown: `*Father*,`,
      },
      {
        markdown: `part of his`,
      },
      {
        markdown: `*double*`,
      },
      {
        markdown: `*interest*`,
      },
      {
        markdown: `Unto *thy kingdome*,`,
        line: 1,
      },
      {
        markdown: `thy **Sonne**`,
        line: 1,
      },
      {
        markdown: `gives`,
        line: 1,
      },
      {
        markdown: `to mee,`,
        line: 1,
      },
      {
        markdown: `His *joynture* in`,
        line: 2,
      },
      {
        markdown: `the *knottie*`,
        line: 2,
      },
      {
        markdown: `**Trinitie**`,
        line: 2,
      },
      {
        markdown: `Hee keepes,`,
        line: 3,
      },
      {
        markdown: `and gives *to me*`,
        line: 3,
      },
      {
        markdown: `his *deaths conquest*.`,
        line: 3,
      },
      {
        markdown: `This **Lambe**,`,
        line: 4,
      },
      {
        markdown: `whose death, with life`,
        line: 4,
      },
      {
        markdown: `the *world* hath **blest**,`,
        line: 4,
      },
      {
        markdown: `Was`,
        line: 5,
      },
      {
        markdown: `from the *worlds beginning*`,
        line: 5,
      },
      {
        markdown: `**slaine**,`,
        line: 5,
      },
      {
        markdown: `and he`,
        line: 5,
      },
      {
        markdown: `Hath made`,
        line: 6,
      },
      {
        markdown: `*two Wills*,`,
        line: 6,
      },
      {
        markdown: `which with the *Legacie*`,
        line: 6,
      },
      {
        markdown: `Of *his and thy kingdome*`,
        line: 7,
      },
      {
        markdown: `doe`,
        line: 7,
      },
      {
        markdown: `thy Sonnes`,
        line: 7,
      },
      {
        markdown: `invest`,
        line: 7,
      },
      {
        markdown: `Yet *such*`,
        line: 8,
      },
      {
        markdown: `are thy *laws*`,
        line: 8,
      },
      {
        markdown: `that men argue yet`,
        line: 8,
      },
      {
        markdown: `Whether a man`,
        line: 9,
      },
      {
        markdown: `*those statutes*`,
        line: 9,
      },
      {
        markdown: `can *fulfill*;`,
        line: 9,
      },
      {
        markdown: `**None doth**;`,
        line: 10,
      },
      {
        markdown: `but *all-healing* grace`,
        line: 10,
      },
      {
        markdown: `and *spirit*`,
        line: 10,
      },
      {
        markdown: `*Revive againe*`,
        line: 11,
      },
      {
        markdown: `what *law and letter*`,
        line: 11,
      },
      {
        markdown: `kill.`,
        line: 11,
      },
      {
        markdown: `Thy *lawes* abridgement,`,
        line: 12,
      },
      {
        markdown: `and thy *last command*`,
        line: 12,
      },
      {
        markdown: `Is **all**`,
        line: 13,
      },
      {
        markdown: `but *love*;`,
        line: 13,
      },
      {
        markdown: `Oh *let*`,
        line: 13,
      },
      {
        markdown: `this last Will`,
        line: 13,
      },
      {
        markdown: `stand!`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `Since **she**`
      },
      {
        markdown: `whom I *lov'd*`
      },
      {
        markdown: `hath *payd her last debt*`
      },
      {
        markdown: `To Nature,`,
        line: 1,
      },
      {
        markdown: `and to *hers*,`,
        line: 1,
      },
      {
        markdown: `and *my good is dead*,`,
        line: 1,
      },
      {
        markdown: `And her *Soule*`,
        line: 2,
      },
      {
        markdown: `early`,
        line: 2,
      },
      {
        markdown: `into *heaven*`,
        line: 2,
      },
      {
        markdown: `ravished,`,
        line: 2,
      },
      {
        markdown: `Wholly`,
        line: 3,
      },
      {
        markdown: `on *heavenly things*`,
        line: 3,
      },
      {
        markdown: `my mind is sett.`,
        line: 3,
      },
      {
        markdown: `**Here**`,
        line: 4,
      },
      {
        markdown: `the admyring her`,
        line: 4,
      },
      {
        markdown: `my mind did whett`,
        line: 4,
      },
      {
        markdown: `To seeke **thee**`,
        line: 5,
      },
      {
        markdown: `God;`,
        line: 5,
      },
      {
        markdown: `so *streames*`,
        line: 5,
      },
      {
        markdown: `do shew their head;`,
        line: 5,
      },
      {
        markdown: `But though`,
        line: 6,
      },
      {
        markdown: `I have found thee,`,
        line: 6,
      },
      {
        markdown: `and *thou*`,
        line: 6,
      },
      {
        markdown: `my thirst hast fed,`,
        line: 6,
      },
      {
        markdown: `A **holy thirsty dropsy**`,
        line: 7,
      },
      {
        markdown: `melts mee yett.`,
        line: 7,
      },
      {
        markdown: `But *why*`,
        line: 8,
      },
      {
        markdown: `should I begg *more* Love,`,
        line: 8,
      },
      {
        markdown: `when as **thou**`,
        line: 8,
      },
      {
        markdown: `Dost wooe my soule`,
        line: 9,
      },
      {
        markdown: `for *hers*;`,
        line: 9,
      },
      {
        markdown: `offring **all thine**:`,
        line: 9,
      },
      {
        markdown: `And dost not *only* feare`,
        line: 10,
      },
      {
        markdown: `least I allow`,
        line: 10,
      },
      {
        markdown: `*My Love*`,
        line: 11,
      },
      {
        markdown: `to *Saints* and *Angels*`,
        line: 11,
      },
      {
        markdown: `things *divine*`,
        line: 11,
      },
      {
        markdown: `But in thy **tender jealousy**`,
        line: 12,
      },
      {
        markdown: `dost *doubt*`,
        line: 12,
      },
      {
        markdown: `Least the World,`,
        line: 13,
      },
      {
        markdown: `Fleshe,`,
        line: 13,
      },
      {
        markdown: `yea **Devill**`,
        line: 13,
      },
      {
        markdown: `*putt thee out*.`,
        line: 13,
      },
    ],
  },
  {
    poem: [
      {
        markdown: `*Show* me`
      },
      {
        markdown: `deare Christ,`
      },
      {
        markdown: `thy **spouse**,`
      },
      {
        markdown: `so *bright and clear*.`
      },
      {
        markdown: `What!`,
        line: 1,
      },
      {
        markdown: `is it *She*,`,
        line: 1,
      },
      {
        markdown: `which on the other shore`,
        line: 1,
      },
      {
        markdown: `Goes *richly* painted?`,
        line: 2,
      },
      {
        markdown: `or which rob'd and tore`,
        line: 2,
      },
      {
        markdown: `*Laments*`,
        line: 3,
      },
      {
        markdown: `and mournes`,
        line: 3,
      },
      {
        markdown: `in Germany and here?`,
        line: 3,
      },
      {
        markdown: `*Sleepes* she`,
        line: 4,
      },
      {
        markdown: `a thousand, then`,
        line: 4,
      },
      {
        markdown: `peepes up`,
        line: 4,
      },
      {
        markdown: `*one* yeare?`,
        line: 4,
      },
      {
        markdown: `Is she *selfe*`,
        line: 5,
      },
      {
        markdown: `**truth**`,
        line: 5,
      },
      {
        markdown: `and **errs**?`,
        line: 5,
      },
      {
        markdown: `now new,`,
        line: 5,
      },
      {
        markdown: `now outwore?`,
        line: 5,
      },
      {
        markdown: `*Doth* she,`,
        line: 6,
      },
      {
        markdown: `and *did* she,`,
        line: 6,
      },
      {
        markdown: `and *shall* she evermore`,
        line: 6,
      },
      {
        markdown: `On *one*,`,
        line: 7,
      },
      {
        markdown: `on *seaven*,`,
        line: 7,
      },
      {
        markdown: `or on **no**`,
        line: 7,
      },
      {
        markdown: `*Laments*`,
        line: 7,
      },
    ],
  },
  {
    poem: [],
  }
]] as const;

export const HOLY_SONNETS: FebruaryBook = {
  chapters: HOLY_CHAPTERS,
  palette: holyColors,
  // TODO: Better arrow image
  arrowImage: SHARED_IMAGES.arrowLeft,
  // TODO: Add music and images
  imageCatalogToLoad: {},
}