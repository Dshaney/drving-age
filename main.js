import input from 'input';

async function main() {
    const drivingAge = 18;
    const myAge = 28;
    const hasLicense = await input.confirm('Do you happen to have a License?');

    if (hasLicense&& myAge>=drivingAge) {
        console.log('You can Drive')
    }
    else {
        console.log('You cannot Drive')
    }
}
main ()