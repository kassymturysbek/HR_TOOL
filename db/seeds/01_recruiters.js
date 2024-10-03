exports.seed = function(knex, Promise) {
    return knex('recruiters').del()
        .then(function() {
            return knex('recruiters').insert([
                { name: "Admin", email: 'admin@admin.com', password: "password", id: 2 },
            ]);
        });
};
