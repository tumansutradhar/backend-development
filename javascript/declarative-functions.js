const bike = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};

bike.setGear(3);
console.log(bike.gear);
