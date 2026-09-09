export interface SquadMember {
  name: string;
  usn: string;
  year: string;
}

export interface TeamRegistrationPayload {
  teamName: string;
  domain: string;
  idea?: string;
  leaderName: string;
  leaderUsn: string;
  leaderYear: string;
  leaderSection: string;
  leaderPhone: string;
  leaderEmail: string;
  members: SquadMember[];
}

export interface TeamRegistrationRecord extends TeamRegistrationPayload {
  id: string;
  registrationId: string;
  status: 'CONFIRMED' | 'PENDING' | 'CHECKED_IN';
  createdAt: string;
}
