/** @format */

/** @Author EternalDev01 */

const Item = new NativeClass('Terraria', 'Item');
const SetDefaults = Item['void SetDefaults(int Type, bool noMatCheck, ItemVariant variant)'];

SetDefaults.hook((original, self, Type, noMatCheck, variant) => {
	original(self, Type, noMatCheck, variant);

	if (self.pick > 0 || self.hammer > 0 || self.axe > 0) {
		/**
         @summary to you change see:
         @example self.useTime *= -0.10 => this reduce tools speed in 10%.
        */
		self.useTime *= -0.75; // 0.75 = -%70
	}
});
