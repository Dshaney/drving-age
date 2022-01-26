import input from 'input';

async function main() {
    const drivingAge = 18;
    const myAge = 29;
    const hasLicense = await input.confirm('Do you happen to have a License?');

    if (hasLicense&& myAge>=drivingAge) {
        console.log('You can Drive')
    }else {
        console.log('You cannot Drive')
        if (myAge < drivingAge) {
            console.log(`Wait ${drivingAge - myAge} Years`)        
        }else { 
            console.log('go get you License!')
        }
    }
}
main ()