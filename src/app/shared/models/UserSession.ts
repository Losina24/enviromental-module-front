/**
 * Name: UserSession.ts
 * Date: 01 - 12 - 2021
 * Author: Alejandro Losa García
 * Description: Class used to manage user's session after login
 */

export default class UserSession {

    // Atributes
    userId: number;
    userRole: string;

    // Constructor
    constructor() {
        if(sessionStorage.getItem('userId')) {
            const userId = parseInt("" + sessionStorage.getItem('userId'));
            this.userId = userId;

            const userRole = "" + sessionStorage.getItem('role');
            this.userRole = userRole;
        }
    }

    // Methods
    /**
     * Check if the user has logged in
     * checkSession() -> boolean
     * 
     * @returns boolean
     */
    public checkSession(): boolean {
        if(this.userId) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Save a session with the user data
     * Z, Text -> createSession() -> 
     * 
     * @param userId User's ID
     * @param role User's role
     */
    public createSession(userId: number, role: string): void {
        sessionStorage.setItem('userId', userId.toString());
        sessionStorage.setItem('role', role);

        this.userId = userId;
        this.userRole = role;
    }

    public getUserId(): number {
        return this.userId;
    }

    public getRole(): string {
        return this.userRole;
    }
}