// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}



// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum,dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      let x = Math.floor(Math.random()*dna.length)
      let coreBase = returnRandBase();
      while (dna[x] === returnRandBase()) {
        x = Math.floor(Math.random()*dna.length)
      };
      dna[x] = coreBase;
      return dna;
    },
    compareDNA(pAequor) {
      let commonGene = 0;
      for (let i=0;i<this.dna.length;i++) {
        for (let j=0;j<pAequor.dna.length;j++) {
          if (this.dna[i]===pAequor.dna[j] && i ===j) {
            commonGene++;
          }
        }
      }
      console.log(commonGene)
      console.log('Specimen #1 and specimen #2 have ' + commonGene/pAequor.dna.length*100 + '% DNA in common')
    },
    willLikelySurvive() {
      let countC = 0;
      let countG = 0;
      for (let i=0;i<this.dna.length;i++) {
        if (this.dna[i]==='C') {
          countC++;
        } else if (this.dna[i]==='G') {
          countG++;
        }
      }
      if ((countC+countG)/this.dna.length >= 0.6) {
        //console.log((countC+countG)/this.dna.length)
        return true;
      } else {
        return false;
      }
    }
  }
}

let bigpAequor = [];
for (i=1;i<=30;i++) {
  bigpAequor.push(pAequorFactory(i,mockUpStrand()))
}

//Test 

let a = pAequorFactory(1,mockUpStrand());
let b = pAequorFactory(2,mockUpStrand());
let u = {specimenNum: 3,
  dna: [ 'C', 'T', 'T', 'G', 'C', 'G', 'A', 'T', 'T', 'A', 'C', 'A', 'C', 'A', 'T' ]}
  
console.log(a)

console.log(a.mutate())

a.compareDNA(u)

console.log(a.willLikelySurvive())

console.log(bigpAequor)







